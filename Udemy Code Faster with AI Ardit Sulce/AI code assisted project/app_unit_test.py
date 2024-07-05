import unittest
from app import calculate_rectangle_area


class TestRectangleArea(unittest.TestCase):
   def test_calculate_rectangle_area_with_positive_numbers(self):
      self.assertEqual(calculate_rectangle_area(5, 3), 15)

   def test_calculate_rectangle_area_with_zero(self):
      self.assertEqual(calculate_rectangle_area(0, 3), 0)
      self.assertEqual(calculate_rectangle_area(5, 0), 0)

   def test_calculate_rectangle_area_with_negative_numbers(self):
      self.assertEqual(calculate_rectangle_area(-5, 3), -15)
      self.assertEqual(calculate_rectangle_area(5, -3), -15)

   def test_calculate_rectangle_area_with_non_numeric_input(self):
      with self.assertRaises(TypeError):
         calculate_rectangle_area('five', 3)
      with self.assertRaises(TypeError):
         calculate_rectangle_area(5, 'three')
      with self.assertRaises(TypeError):
         calculate_rectangle_area('five', 'three')


if __name__ == '__main__':
   unittest.main()
