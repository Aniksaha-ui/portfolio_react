export function truncateText(text, maxLength) {
    // Split the text into words
    const words = text.split(' ');
    
    // If the number of words is less than or equal to maxLength, return the original text
    if (words.length <= maxLength) {
      return text;
    }
    
    // Otherwise, join the first maxLength words and append "..."
    return words.slice(0, maxLength).join(' ') + '...';
  }
  
 
