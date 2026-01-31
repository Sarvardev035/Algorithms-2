class Solution:
    def nextGreatestLetter(self, letters: List[str], target: str) -> str:
        left, right = 0, len(letters) - 1
        
        # Binary search to find the first character strictly > target
        while left <= right:
            mid = left + (right - left) // 2
            if letters[mid] <= target:
                left = mid + 1
            else:
                right = mid - 1
        
        # Wrap-around: if 'left' is out of bounds, target is greater than all letters.
        # Indexing with modulo handles this naturally.
        return letters[left % len(letters)]