module.exports = {
    setupFiles: ['<rootDir>/test/setupTests.js'],
    moduleFileExtensions: [
        'js',
        'jsx',
        'json',
        'node'
      ],
      coverageDirectory: '<rootDir>/coverage', // [string]
      transform: {
        '\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
        '^(?!.*\\.(js|jsx|json|css|less|styl|scss|sass|sss)$)':
          '<rootDir>/tools/lib/fileTransformer.js',
      },
      moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
      },
      snapshotSerializers: ['enzyme-to-json/serializer'],
      modulePaths: ['node_modules', 'src'],
      transformIgnorePatterns: ['<rootDir>/node_modules/']
  };