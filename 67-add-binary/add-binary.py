class Solution:
    def addBinary(self, a: str, b: str) -> str:
        # Convert binary strings to integers, add them, 
        # then convert back to binary string and slice off '0b'
        return bin(int(a, 2) + int(b, 2))[2:]
