module.exports = {
  setupFiles: ['./test/setupTest.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.(ts|tsx|js|jsx)?$': 'babel-jest'
  }
}
