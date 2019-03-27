#ifdef GL_ES
//全ての浮動小数点型の変数に中レベルの精度を指定しています
//より低い精度（precision lowp float;）や高い精度（precision highp float;）を選ぶこともできます。
precision mediump float;
#endif

vec4 red(){
     return vec4(1.0,0.0,0.0,1.0);
}

void main(){
	//予約語として確保されたグローバル変数gl_FragColor
  //gl_FragColor = vec4(1.0,0.0,1.0,1.0);
    //gl_FragColor = vec4(0.732,1.000,0.639,1.000);
    gl_FragColor = red();
}