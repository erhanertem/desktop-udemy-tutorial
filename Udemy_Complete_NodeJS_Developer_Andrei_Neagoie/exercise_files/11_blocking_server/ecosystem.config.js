module.exports = {
  apps: [
    // THIS OBJECT IS MEANT ONLY FOR A SINGLE APP..MORE OF THESE CONSTITUE SPECIFIC SETUP WRAPPED IN AN ARRAY NOTATION
    {
      name: 'server',
      script: './src/server.js',

      // number of app instance to be launched, how many core
      // instances: 2,
      // instances: 'max',
      instances: 10,
      // handling logs
      out_file: './logs/out.log',
      error_file: './logs/errors.log',
      merge_logs: true,

      exec_mode: 'cluster',
      // enable watch & restart feature, if a file change in the folder or subfolder, your app will get reloaded
      // watch: true,
      // your app will be restarted if it exceeds the amount of memory specified.
      // human-friendly format : it can be “10M”, “100K”, “2G” and so on
      // max_memory_restart: '1G',
      // env variables which will appear in your app
      env_development: {
        PORT: 3000,
        NODE_ENV: 'development',
        // NODE_CLUSTER_SCHED_POLICY: 'rr',
      },
      env_production: {
        PORT: 3001,
        NODE_ENV: 'production',
        // NODE_CLUSTER_SCHED_POLICY: 'rr',
      },
    },
  ],
};
