module.exports = {
  name: 'ng-mono',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ng-mono',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
