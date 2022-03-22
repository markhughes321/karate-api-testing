function fn() {
  var env = karate.env; // get system property 'karate.env'
  karate.log('karate.env system property was:', env);
  if (!env) {
    env = 'dev';
  }
  var config = {
    env: env,
    newsUrl: 'https://bkb2nvpur4.execute-api.us-east-2.amazonaws.com/'
  }
  if (env == 'dev') {
    karate.configure('headers', { Authorization : 'eyJraWQiOiIyTmJWT3FmN0NMV2pPQU92ZksxZ1hDVkt0elp0VmtHd0Z3S1VQSmhjQk40PSIsImFsZyI6IlJTMjU2In0.eyJvcmlnaW5fanRpIjoiMzdhYTFjNzEtMTQxOS00M2NmLWJlNTAtZTMwZGE4NmYzYTRkIiwic3ViIjoiYmFmM2IxNWEtOGEzYi00NzljLWIxMGItYzcwNmNhYWIxN2Y0IiwiZXZlbnRfaWQiOiI4ZmUyOGI3OC01MmMxLTQzNzAtOTJjNi1kYTFiODMyYTgxNzIiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIiwiYXV0aF90aW1lIjoxNjQ3OTUzNTU3LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0xLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMV9yWnBsc2ZvOGciLCJleHAiOjE2NDc5NjExMTIsImlhdCI6MTY0Nzk1NzUxMiwianRpIjoiMDE5NjcyZDMtZTg1Mi00MjA4LWFlMmQtYmJjYzlhNjhlZjU1IiwiY2xpZW50X2lkIjoiMm1pMzBkY212Yzhncm9sa2hyaHRrY2FvZXQiLCJ1c2VybmFtZSI6ImJhZjNiMTVhLThhM2ItNDc5Yy1iMTBiLWM3MDZjYWFiMTdmNCJ9.Y3TOS824UholZsrnO2YiiwGfMTBU7m6Z2L4WhT9-PXS5vlNlwxG8q5jVYZ2h4-zawVBR-8aIwAqxwskFNiPuGgNh9aD6z8QcozYTWtWMB6HW37CWhx926A3fSzcEZtHzy0lPU7fiBHTw5CVaW0HMowexar8jAeZ6eMKieBkv30G2JDQSxmUyJC2ef2IXx4qvMEH1gMke7ex2FDeAiNzgbzmbG6FNTTS1Ac9UYDeSaPQPJo0guMRH8uuvwGSebam3uyRfA1v_DcCYmf_iRG1GuCpGr0QItgYC-x53yVe9dUBndftE6g6jfD0Xe4ccTB7Pfc54myyG_zFAOpCMu04eSA' });
  } 
  else if (env == 'eph') {
    // customize
  }
  else if (env == 'stg') {
    // customize
  }

  return config;
}