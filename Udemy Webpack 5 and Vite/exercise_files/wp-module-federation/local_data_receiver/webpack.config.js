//LOCAL
const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = (env, argv) => {
	return {
		context: path.resolve(__dirname, 'src'),
		entry: './entry.js',
		output: {
			clean: true,
			path: path.resolve(__dirname, 'dist'),
		},
		devServer: {
			port: 3333,
		},
		plugins: [
			new ModuleFederationPlugin({
				name: 'home_container',
				remotes: {
					//ADDRESS OF THE REMOTE PROJECT
					remote_path:
						argv.mode === 'production'
							? 'remote_container@http://localhost:80/remote/remoteEntry.js'
							: 'remote_container@http://localhost:4444/remoteEntry.js',
				},
			}),
		],
	};
};
