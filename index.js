const workerRoutes = require('./routes/workerRoutes');
const produceRoutes = require('./routes/produceRoutes');
const adminRoutes = require('./routes/adminRoutes');
const farmRoutes = require('./routes/farmRoutes');

const app = {};
const port = 3000;

// configure app to use the routes
app.use('/', workerRoutes);
app.use('/produce', produceRoutes);
app.use('/admin', adminRoutes);
app.use('/farm', farmRoutes);

app.liste(port, () => console.log(`Server listening on port ${port}`));
