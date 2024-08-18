from flask import Flask, render_template, request, views
from flask_bootstrap import Bootstrap
import json

app = Flask(__name__)
Bootstrap(app)

# Load questions from JSON file
with open('questions.json') as f:
    questions = json.load(f)

# FUNCTION BASED ROUTE HANDLING
# @app.route('/')
# def index():
#    return render_template('index.html', questions=questions)

# CLASS BASED VIEW REFACTORING


class IndexView(views.MethodView):
    def get(self):
        return render_template('index.html', questions=questions)


app.add_url_rule('/', view_func=IndexView.as_view('index'))


@app.route('/submit', methods=['POST'])
def submit():
    score = 0
    results = []
    for question in questions:
        selected_option = request.form.get(f'question-{question["id"]}')
        if selected_option == question['answer']:
            results.append({'question': question['question'], 'correct': True})
            score += 1
        else:
            results.append(
                {'question': question['question'], 'correct': False, 'selected': selected_option})
    return render_template('result.html', score=score, total=len(questions), results=results)


class Rectangle:
    def __init__(self, width, height):
        """
        Initialize a rectangle with width and height.

        :param width: The width of the rectangle
        :param height: The height of the rectangle
        """
        self.width = width
        self.height = height

    def calculate_area(self):
        """
        Calculate the area of the rectangle.

        :return: The area of the rectangle
        """
        return self.width * self.height


# Create an instance of the Rectangle class with width 5 and height 10
my_rectangle = Rectangle(5, 10)

# Calculate the area of the rectangle using the calculate_area method
area = my_rectangle.calculate_area()

print("Area of the rectangle:", area)

if __name__ == '__main__':
    app.run(debug=True)
