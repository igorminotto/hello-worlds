from math import isnan

class Complex:
    @staticmethod
    def toComplex(value):
        if isinstance(value, Complex):
            return value
        else:
            return Complex(float(value), 0)

    def __init__(self, real: float, imaginary: float) -> None:
        self.real = float(real)
        self.imaginary = float(imaginary)

    def __eq__(self, other):
        try:
            other = Complex.toComplex(other)
            return (self.real == other.real) and (self.imaginary == other.imaginary)
        except (ValueError, TypeError):
            return False

    def __add__(self, other):
        return Complex(self.real + other.real, self.imaginary + other.imaginary)

    def __mul__(self, other):
        r = self.real * other.real - self.imaginary * other.imaginary
        i = self.real * other.imaginary + self.imaginary * other.real
        return Complex(r, i)

    def __str__(self):
        return "{0:0} {1:+} i".format(self.real, self.imaginary)

    def __repr__(self):
        return self.__str__()
