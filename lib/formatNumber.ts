export const formatNumber = (num?: number | null): string => {
  // Handle undefined/null cases
  if (num === undefined || num === null) {
    return '0'; // or return '' if you prefer empty string
  }

  // Handle non-number inputs (though TypeScript should prevent this)
  if (typeof num !== 'number') {
    return num?.toString() || '0';
  }

  // Format valid numbers
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return num.toString();
};