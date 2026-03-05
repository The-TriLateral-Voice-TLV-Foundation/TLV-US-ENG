#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Configuration for directory indexing
 */
const CONFIG = {
  // Directories to exclude from the index
  excludeDirs: new Set([
    '.git',
    'node_modules',
    '.next',
    '.nuxt',
    'dist',
    'build',
    '.venv',
    '__pycache__',
    '.DS_Store',
    '.vscode',
    '.idea',
    'coverage',
    '.env',
    '.cache',
  ]),

  // File extensions to include (if empty, all are included)
  // Set to empty to include all files
  includeExtensions: new Set(),

  // Maximum depth to traverse (0 = unlimited)
  maxDepth: 0,

  // Add file extensions to metadata
  includeExtension: true,

  // Calculate total sizes and counts
  includeSummary: true,
};

/**
 * Check if path should be excluded
 */
function shouldExclude(name) {
  return CONFIG.excludeDirs.has(name) || name.startsWith('.');
}

/**
 * Get file extension
 */
function getExtension(filename) {
  const ext = path.extname(filename);
  return ext ? ext.substring(1) : '';
}

/**
 * Recursively scan directory and build tree structure
 */
function scanDirectory(dirPath, currentDepth = 0) {
  const info = {
    path: dirPath === './' ? './' : dirPath,
    name: dirPath === './' ? '[root]' : path.basename(dirPath),
    type: 'folder',
    depth: currentDepth,
  };

  // Check depth limit
  if (CONFIG.maxDepth > 0 && currentDepth >= CONFIG.maxDepth) {
    info.children = [];
    return info;
  }

  try {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    const children = [];

    for (const entry of entries) {
      // Skip excluded items
      if (shouldExclude(entry.name)) {
        continue;
      }

      const fullPath = path.join(dirPath, entry.name);
      const relativePath = path.relative('.', fullPath);

      if (entry.isDirectory()) {
        // Recursively scan subdirectories
        const subdir = scanDirectory(fullPath, currentDepth + 1);
        children.push(subdir);
      } else if (entry.isFile()) {
        // Add file with metadata
        const stats = fs.statSync(fullPath);
        const fileInfo = {
          path: relativePath,
          name: entry.name,
          type: 'file',
          size: stats.size,
          depth: currentDepth + 1,
        };

        // Add extension if enabled
        if (CONFIG.includeExtension) {
          const ext = getExtension(entry.name);
          if (ext) {
            fileInfo.extension = ext;
          }
        }

        children.push(fileInfo);
      }
    }

    // Sort children: folders first, then alphabetically
    children.sort((a, b) => {
      if (a.type !== b.type) {
        return a.type === 'folder' ? -1 : 1;
      }
      return a.name.localeCompare(b.name);
    });

    info.children = children;
  } catch (error) {
    console.error(`Error reading directory ${dirPath}:`, error.message);
    info.children = [];
  }

  return info;
}

/**
 * Calculate summary statistics
 */
function calculateSummary(tree) {
  const summary = {
    totalFiles: 0,
    totalFolders: 0,
    totalSize: 0,
    filesByExtension: {},
  };

  function traverse(node) {
    if (node.type === 'folder') {
      summary.totalFolders++;
      if (node.children) {
        node.children.forEach(traverse);
      }
    } else if (node.type === 'file') {
      summary.totalFiles++;
      summary.totalSize += node.size || 0;

      // Track by extension
      if (node.extension) {
        summary.filesByExtension[node.extension] =
          (summary.filesByExtension[node.extension] || 0) + 1;
      } else {
        summary.filesByExtension['[no extension]'] =
          (summary.filesByExtension['[no extension]'] || 0) + 1;
      }
    }
  }

  traverse(tree);
  return summary;
}

/**
 * Format bytes to human-readable size
 */
function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

/**
 * Generate and save index.json
 */
function generateIndex(outputPath = 'index.json') {
  console.log('📁 Scanning directory structure...');

  // Scan from current directory
  const tree = scanDirectory('./');

  // Prepare output object
  const output = {
    generated: new Date().toISOString(),
    repository: {
      path: process.cwd(),
      name: path.basename(process.cwd()),
    },
    config: {
      excludedDirs: Array.from(CONFIG.excludeDirs),
      maxDepth: CONFIG.maxDepth || 'unlimited',
      includeExtensions: CONFIG.includeExtensions.size > 0
        ? Array.from(CONFIG.includeExtensions)
        : 'all',
    },
    tree,
  };

  // Add summary if enabled
  if (CONFIG.includeSummary) {
    const summary = calculateSummary(tree);
    output.summary = {
      totalFiles: summary.totalFiles,
      totalFolders: summary.totalFolders,
      totalSize: formatBytes(summary.totalSize),
      totalSizeBytes: summary.totalSize,
      filesByExtension: summary.filesByExtension,
    };
  }

  // Write to file
  try {
    fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
    console.log(`✅ Index generated successfully: ${outputPath}`);
    console.log(`📊 Summary:`);
    console.log(`   Files: ${output.summary?.totalFiles || 0}`);
    console.log(`   Folders: ${output.summary?.totalFolders || 0}`);
    console.log(`   Total Size: ${output.summary?.totalSize || 'N/A'}`);
  } catch (error) {
    console.error(`❌ Error writing index file:`, error.message);
    process.exit(1);
  }
}

/**
 * Main execution
 */
if (require.main === module) {
  const outputPath = process.argv[2] || 'index.json';
  generateIndex(outputPath);
}

module.exports = { generateIndex, scanDirectory, calculateSummary };
