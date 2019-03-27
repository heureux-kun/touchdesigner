#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
//フラグメントの座標を描画領域全体のサイズで割ることによって正規化している
//（座標値の範囲が 0.0 から 1.0 の間に収まるようにしている）
  vec2 st = u_mouse.xy/u_resolution;
  gl_FragColor = vec4(st.x,st.y,0.0,1.0);
}