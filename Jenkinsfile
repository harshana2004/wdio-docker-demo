// - Ensure that Docker is installed and that jenkins is in the docker group.
pipeline {
  agent any
  stages {
  stage('Build App') {
      steps {
        script {
                sh "docker build . -t 'e2e-tests'"
              }
      }
    }
  stage('Execute Test') {
      steps {
        script {
              sh "mkdir -p allure-results"
              sh "docker run --rm -v '${workspace}/allure-results:/workdir/allure-results''e2e-tests'"
         }
      }
    }
  stage('Reports') {
      steps {
        script {
            allure([
                    includeProperties: false,
                    jdk: '',
                    properties: [],
                    reportBuildPolicy: 'ALWAYS',
                    results: [[path: 'allure-results']]
              ])
          }
        }
      }  
  } // End stages
post {
    always {
      allure([ includeProperties: false,
                jdk: '', 
                properties: [], 
                reportBuildPolicy: 'ALWAYS', 
                results: [[path: 'allure-results']] ])
      }
   }
}

