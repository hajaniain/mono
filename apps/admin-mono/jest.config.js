module.exports = {
  name: 'admin-mono',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/admin-mono',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
