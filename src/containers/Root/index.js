const isPropduction = process.env.NODE_ENV == "production"

const root = isPropduction ? require('./prod').default : require('./dev').default

export default root