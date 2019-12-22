import unittest
from math import isnan, isinf
from hypothesis import given, assume, infer
from hypothesis.strategies import floats, builds
from Complex import Complex

validFloats = floats(allow_nan=False, allow_infinity=False)

class TestComplex(unittest.TestCase):
    def testToComplex(self):
        self.assertIsInstance(Complex.toComplex(1), Complex)
        self.assertIsInstance(Complex.toComplex("1"), Complex)
        with self.assertRaises(ValueError):
            Complex.toComplex("A")
        with self.assertRaises(TypeError):
            Complex.toComplex((1,2))

    @given(real=infer)
    def testEqualityOfRealPart(self, real: float):
        assume(not isnan(real))
        self.assertEqual(Complex(real,0), real)

    @given(real1=infer, real2=infer)
    def testEqualityOfRealParts(self, real1: float, real2: float):
        self.assertEqual(Complex(real1,0) == Complex(real2,0), real1 == real2)

    @given(imaginary1=infer, imaginary2=infer)
    def testEqualityOfImaginaryParts(self, imaginary1: float, imaginary2: float):
        self.assertEqual(Complex(0,imaginary1) == Complex(0,imaginary2), imaginary1 == imaginary2)

    @given(builds(Complex, floats(), floats()))
    def testEqualityWithItself(self, z):
        z_copy = Complex(z.real, z.imaginary)
        assume(not isnan(z.real) and not isnan(z.imaginary))
        self.assertEqual(z, z_copy)

    def testImaginaryUnit(self):
        i = Complex(0,1)
        self.assertEqual(Complex(0,1), i)
        self.assertEqual(Complex(-1,0), i*i)
        self.assertEqual(Complex(0,-1), i*i*i)
        self.assertEqual(Complex(1,0), i*i*i*i)
        self.assertEqual(Complex(0,1), i*i*i*i*i)

    @given(
        a=builds(Complex, validFloats, validFloats),
        b=builds(Complex, validFloats, validFloats)
    )
    def testAdditionComute(self, a, b):
        self.assertEqual(a+b, b+a)

    @given(
        a=builds(Complex, validFloats, validFloats),
        b=builds(Complex, validFloats, validFloats)
    )
    def testMultiplicationComute(self, a, b):
        assume(not isinf((a*b).real) and not isinf((a*b).imaginary))
        self.assertEqual(a*b, b*a)
