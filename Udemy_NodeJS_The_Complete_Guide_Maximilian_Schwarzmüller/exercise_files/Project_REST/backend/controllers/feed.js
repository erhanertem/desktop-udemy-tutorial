exports.getPosts = (req, res, next) => {
	res.status(200).json({
		posts: [
			{
				title: 'First Post',
				content: 'This is the first post',
			},
		],
	});
};

exports.postPost = (req, res, next) => {
	const { title, content } = req.body;

	// Create post in db
	res.status(201).json({ message: 'Post created succesfully', post: { id: new Date().toISOString(), title, content } });
};
