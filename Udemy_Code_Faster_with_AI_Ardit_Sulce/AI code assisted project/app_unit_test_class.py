import unittest
from app import Rectangle


class TestRectangle(unittest.TestCase):
    def test_calculate_area(self):
        # Create an instance of the Rectangle class with width 5 and height 10
        my_rectangle = Rectangle(5, 10)
        # Test if the area is calculated correctly
        self.assertEqual(my_rectangle.calculate_area(), 50)


if __name__ == '__main__':
    unittest.main()
