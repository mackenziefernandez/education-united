const env = {
  test: {
    firebaseConfig: {
      apiKey: 'AIzaSyDkEMxn5bMhac5mH6R3ERo4XIP7jMtnK_0',
      authDomain: 'ed-united.firebaseapp.com',
      databaseURL: 'https://ed-united.firebaseio.com/'
    }
  },
  // same thing for now
  production: {
    firebaseConfig: {
      apiKey: 'AIzaSyDkEMxn5bMhac5mH6R3ERo4XIP7jMtnK_0',
      authDomain: 'ed-united.firebaseapp.com',
      databaseURL: 'https://ed-united.firebaseio.com/'
    }
  }
};

export default env[process.env.NODE_ENV] || env.test;
