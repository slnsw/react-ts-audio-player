pipeline {
  agent any
  stages {
    stage('Setup') {
      steps {
        echo 'Setting up repo...'
        sh 'npm i'
        sh 'npm link react'
        sh 'npm link react-dom'
        sh 'mkdir -p reports/eslint'
        sh 'mkdir -p reports/jest'
      }
    }
    stage('ESLint') {
      environment {
        DEBUG = 'eslint:cli-engine'
      }
      steps {
        echo 'Running ESLint...'
        sh 'npx eslint --format junit -o reports/eslint/js-lint-results.xml src/**/*.{ts,tsx}'
      }
      post {
        always {
          junit 'reports/eslint/*.xml'
        }
      }
    }
    stage('jest') {
      steps {
        echo 'Running jest...'
        sh 'npx cross-env JEST_JUNIT_OUTPUT_DIR=reports/jest npm run test -- --ci --reporters=default --reporters=jest-junit'
      }
      post {
        always {
          junit 'reports/jest/*.xml'
        }
      }
    }
  }
}