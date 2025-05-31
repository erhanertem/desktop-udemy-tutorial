using JSON, DataFrames

cd("03ImportData/data")

# Read JSON file
text = Base.read("tvseries.json", String) # Read as a plain string - raw JSON data
dict = JSON.parse(text) # Parses the JSON string into a PROPER Julia Object (String content -> STring, JSON object {} -> Dict(String, Any), JSON array [] -> Vector(Any))
df = DataFrame(dict) # Convert Dict to DataFrame

# Convert JSON string to Julia Dict
json_str = """{"name": "Breaking Bad", "seasons": 5}"""
Base.write("notes_json.json", json_str)  # Save JSON string to a file

julia_obj = JSON.parse(json_str)  # Dict("name" => "Breaking Bad", "seasons" => 5)
# Convert Julia Dict back to JSON string
back_to_json = JSON.json(julia_obj)  # "{\"name\":\"Breaking Bad\",\"seasons\":5}"
Base.write("notes.json", back_to_json)  # Save JSON string to a file
