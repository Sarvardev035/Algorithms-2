class Solution:
    def constructTransformedArray(self, nums: List[int]) -> List[int]:
        n = len(nums)
        res = []

        for i , v in enumerate(nums):
            res.append(nums[(i+v)%n])

        return res   