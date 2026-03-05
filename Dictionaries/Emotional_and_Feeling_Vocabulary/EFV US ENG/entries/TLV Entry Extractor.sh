#!/bin/bash

# Script to extract vocabulary entries and organize them into folders
# Usage: ./extract-entries.sh

# Color codes for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== TLV Vocabulary Entry Extractor ===${NC}"
echo ""

# Get the current directory
ENTRIES_DIR="$(pwd)"

# Check if we're in the right directory
if ! ls *"TriLateral-Voice (TLV) Emotional and Feeling Vocabulary Entries"*.md &> /dev/null; then
    echo -e "${YELLOW}Warning: No TLV vocabulary entry files found in current directory.${NC}"
    echo "Please run this script from the directory containing the entry files."
    exit 1
fi

# Counter for statistics
total_entries=0
total_letters=0

# Process each letter file
for letter_file in *"TriLateral-Voice (TLV) Emotional and Feeling Vocabulary Entries"*.md; do
    # Extract the letter from the filename (first character)
    letter=$(echo "$letter_file" | cut -c1)
    
    echo -e "${BLUE}Processing: ${letter}${NC}"
    
    # Create letter directory if it doesn't exist
    if [ ! -d "$letter" ]; then
        mkdir -p "$letter"
        echo -e "${GREEN}  Created folder: ${letter}/${NC}"
    fi
    
    # Counter for this letter
    letter_count=0
    
    # Read the file and extract entries
    # We'll use awk to split on ### headers and save each section
    awk -v letter="$letter" -v count=0 '
        BEGIN {
            in_entry = 0
            entry_name = ""
            entry_content = ""
        }
        
        # Match lines starting with ### followed by a word
        /^### [A-Z]/ {
            # Save previous entry if exists
            if (in_entry && entry_name != "" && entry_content != "") {
                # Create safe filename (lowercase, replace spaces with hyphens)
                safe_name = tolower(entry_name)
                gsub(/[^a-z0-9]+/, "-", safe_name)
                gsub(/^-+|-+$/, "", safe_name)  # Remove leading/trailing hyphens
                
                filename = letter "/" safe_name ".md"
                
                # Write the entry to file
                print "### " entry_name > filename
                print "" >> filename
                print entry_content >> filename
                
                count++
            }
            
            # Start new entry
            in_entry = 1
            entry_name = substr($0, 5)  # Remove "### "
            gsub(/^[ \t]+|[ \t]+$/, "", entry_name)  # Trim whitespace
            entry_content = ""
            next
        }
        
        # If we are in an entry, accumulate content
        in_entry {
            if (entry_content == "") {
                entry_content = $0
            } else {
                entry_content = entry_content "\n" $0
            }
        }
        
        END {
            # Save the last entry
            if (in_entry && entry_name != "" && entry_content != "") {
                safe_name = tolower(entry_name)
                gsub(/[^a-z0-9]+/, "-", safe_name)
                gsub(/^-+|-+$/, "", safe_name)
                
                filename = letter "/" safe_name ".md"
                
                print "### " entry_name > filename
                print "" >> filename
                print entry_content >> filename
                
                count++
            }
            
            print count
        }
    ' "$letter_file"
    
    # Get the count from awk output
    letter_count=$(awk -v letter="$letter" -v count=0 '
        BEGIN {
            in_entry = 0
            entry_name = ""
            entry_content = ""
        }
        
        /^### [A-Z]/ {
            if (in_entry && entry_name != "" && entry_content != "") {
                count++
            }
            
            in_entry = 1
            entry_name = substr($0, 5)
            gsub(/^[ \t]+|[ \t]+$/, "", entry_name)
            entry_content = ""
            next
        }
        
        in_entry {
            if (entry_content == "") {
                entry_content = $0
            } else {
                entry_content = entry_content "\n" $0
            }
        }
        
        END {
            if (in_entry && entry_name != "" && entry_content != "") {
                count++
            }
            
            print count
        }
    ' "$letter_file")
    
    echo -e "${GREEN}  Extracted ${letter_count} entries from ${letter}${NC}"
    
    total_entries=$((total_entries + letter_count))
    total_letters=$((total_letters + 1))
done

echo ""
echo -e "${BLUE}=== Extraction Complete ===${NC}"
echo -e "${GREEN}Total letters processed: ${total_letters}${NC}"
echo -e "${GREEN}Total entries extracted: ${total_entries}${NC}"
echo ""
echo -e "${YELLOW}Note: Each entry is now in its corresponding letter folder as a separate .md file${NC}"

