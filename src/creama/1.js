function getFinalString(s) {
  let has = s.indexOf("AWS"); // includes() 대신 indexOf() 사용

  while (has !== -1) {
    s = s.replace("AWS", "");
    has = s.indexOf("AWS"); // includes() 대신 indexOf() 사용
  }

  return s.length > 0 ? s : -1; // 빈 문자열 체크를 length로 변경
}


getFinalString("AAWSWS")