const path = require('path');
//1.dist/index.html을 생성해줌
//2.최종 js파일이 자동으로 html에 추가가 되므로,
//html 파일에 추가할필요가 없다
const HtmlWebpackPlugin = require('html-webpack-plugin');

//__dirname은 현재 실행 중인 스크립트가 있는 디덱터리 이름을 포함하는 node.js 전역변수
module.exports = {
  context: path.resolve(__dirname, 'app'), //모듈들이 존재하는 기존경로. 필수는 아니지만 없으면 entry에 풀경로로 적어주어야함
  entry: './index', //엔트리파일 위치
  output: {
    path: path.resolve(__dirname, 'dist'), //번들파일의 대상 경로
    filename: '[name].js' //번들파일의 이름. 보통 bundle.js로도 설정함
  },
  module: { //로더
    rules: [
      { //typescript에 관한 로더
        test: /\.(ts|tsx)$/, //로더가 처리하는 파일확장자 정규식
        loader: 'awesome-typescript-loader', //로더의 이름, babel을 통해 es5로 변환해주고 캐시를 활용해 webpack컴파일을 더 빠르게 해줌
        exclude: /node_modules/ ///로더가 명시적으로 추가하거나 무시할 폴더를 수동으로 지정. node_modules 폴더를 무시하겠단것임
      },
      { //css에 관한 로더
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'] //등록해두면 import시에 확장자 생략 가능
  },
  plugins: [ //플러그인을통해 컴파일이나 chunks 과정에서 사용자 정의 기능 수행하는데 사용
            //require키워드로 불러와서 plugins 속성에 추가하면됨
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],
  mode: 'development',
  devtool: 'source-map'
};
