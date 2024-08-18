def miles_to_km(miles):
    """
    Convert miles to kilometers.

    Parameters:
    miles (float): The distance in miles to be converted.

    Returns:
    float: The distance in kilometers.

    Note:
    1 mile is approximately equal to 1.60934 kilometers.
    """
    return miles * 1.60934


distance_in_miles = 100
distance_in_km = miles_to_km(distance_in_miles)
print(f"{distance_in_miles} miles is equal to {distance_in_km} km.")
