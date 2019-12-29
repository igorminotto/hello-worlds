class FibonacciCalculator():

    def __init__(self):
        self.cache = [1, 1]
        self.number_of_calls = 0

    def calculate_with_cache(self, n: int) -> int:
        if len(self.cache) > n:
            return self.cache[n]
        self.number_of_calls += 1
        result = self.calculate_with_cache(n-1) + self.calculate_with_cache(n-2)
        self.cache.append(result)
        return result

    def calculate(self, n: int) -> int:
        if n == 0 or n == 1:
            return 1
        self.number_of_calls += 1
        return self.calculate(n-1) + self.calculate(n-2)
