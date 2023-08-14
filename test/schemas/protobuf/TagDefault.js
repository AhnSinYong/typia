//---------------------------------------------------------
// MESSAGE
//---------------------------------------------------------
// syntax = "proto3";
// 
// message TagDefault {
//     required bool boolean = 1;
//     required double number = 2;
//     required string string = 3;
//     required string text = 4;
//     required string template = 5;
//     oneof boolean_and_number_and_string {
//         bool v6 = 6;
//         double v7 = 7;
//         string v8 = 8;
//     }
//     oneof union_but_boolean {
//         bool v9 = 9;
//         double v10 = 10;
//         string v11 = 11;
//     }
//     oneof union_but_number {
//         bool v12 = 12;
//         double v13 = 13;
//         string v14 = 14;
//     }
//     oneof union_but_string {
//         bool v15 = 15;
//         double v16 = 16;
//         string v17 = 17;
//     }
//     required double vulnerable_range = 18;
//     required string vulnerable_template = 19;
//     oneof boolean_and_number_and_template {
//         bool v20 = 20;
//         double v21 = 21;
//         string v22 = 22;
//     }
// }

//---------------------------------------------------------
// ENCODER
//---------------------------------------------------------
function TagDefault$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(8).bool(m.boolean)
  w.uint32(17).double(m.number)
  w.uint32(26).string(m.string)
  w.uint32(34).string(m.text)
  w.uint32(42).string(m.template)
  if(m.v6!=null&&Object.hasOwnProperty.call(m,"v6"))
  w.uint32(48).bool(m.v6)
  if(m.v7!=null&&Object.hasOwnProperty.call(m,"v7"))
  w.uint32(57).double(m.v7)
  if(m.v8!=null&&Object.hasOwnProperty.call(m,"v8"))
  w.uint32(66).string(m.v8)
  if(m.v9!=null&&Object.hasOwnProperty.call(m,"v9"))
  w.uint32(72).bool(m.v9)
  if(m.v10!=null&&Object.hasOwnProperty.call(m,"v10"))
  w.uint32(81).double(m.v10)
  if(m.v11!=null&&Object.hasOwnProperty.call(m,"v11"))
  w.uint32(90).string(m.v11)
  if(m.v12!=null&&Object.hasOwnProperty.call(m,"v12"))
  w.uint32(96).bool(m.v12)
  if(m.v13!=null&&Object.hasOwnProperty.call(m,"v13"))
  w.uint32(105).double(m.v13)
  if(m.v14!=null&&Object.hasOwnProperty.call(m,"v14"))
  w.uint32(114).string(m.v14)
  if(m.v15!=null&&Object.hasOwnProperty.call(m,"v15"))
  w.uint32(120).bool(m.v15)
  if(m.v16!=null&&Object.hasOwnProperty.call(m,"v16"))
  w.uint32(129).double(m.v16)
  if(m.v17!=null&&Object.hasOwnProperty.call(m,"v17"))
  w.uint32(138).string(m.v17)
  w.uint32(145).double(m.vulnerableRange)
  w.uint32(154).string(m.vulnerableTemplate)
  if(m.v20!=null&&Object.hasOwnProperty.call(m,"v20"))
  w.uint32(160).bool(m.v20)
  if(m.v21!=null&&Object.hasOwnProperty.call(m,"v21"))
  w.uint32(169).double(m.v21)
  if(m.v22!=null&&Object.hasOwnProperty.call(m,"v22"))
  w.uint32(178).string(m.v22)
  return w
}

//---------------------------------------------------------
// DECODER
//---------------------------------------------------------
function TagDefault$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.boolean=r.bool()
  break
  }
  case 2: {
  m.number=r.double()
  break
  }
  case 3: {
  m.string=r.string()
  break
  }
  case 4: {
  m.text=r.string()
  break
  }
  case 5: {
  m.template=r.string()
  break
  }
  case 6: {
  m.v6=r.bool()
  break
  }
  case 7: {
  m.v7=r.double()
  break
  }
  case 8: {
  m.v8=r.string()
  break
  }
  case 9: {
  m.v9=r.bool()
  break
  }
  case 10: {
  m.v10=r.double()
  break
  }
  case 11: {
  m.v11=r.string()
  break
  }
  case 12: {
  m.v12=r.bool()
  break
  }
  case 13: {
  m.v13=r.double()
  break
  }
  case 14: {
  m.v14=r.string()
  break
  }
  case 15: {
  m.v15=r.bool()
  break
  }
  case 16: {
  m.v16=r.double()
  break
  }
  case 17: {
  m.v17=r.string()
  break
  }
  case 18: {
  m.vulnerableRange=r.double()
  break
  }
  case 19: {
  m.vulnerableTemplate=r.string()
  break
  }
  case 20: {
  m.v20=r.bool()
  break
  }
  case 21: {
  m.v21=r.double()
  break
  }
  case 22: {
  m.v22=r.string()
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("boolean"))
  throw util.ProtocolError("missing required 'boolean'",{instance:m})
  if(!m.hasOwnProperty("number"))
  throw util.ProtocolError("missing required 'number'",{instance:m})
  if(!m.hasOwnProperty("string"))
  throw util.ProtocolError("missing required 'string'",{instance:m})
  if(!m.hasOwnProperty("text"))
  throw util.ProtocolError("missing required 'text'",{instance:m})
  if(!m.hasOwnProperty("template"))
  throw util.ProtocolError("missing required 'template'",{instance:m})
  if(!m.hasOwnProperty("vulnerableRange"))
  throw util.ProtocolError("missing required 'vulnerableRange'",{instance:m})
  if(!m.hasOwnProperty("vulnerableTemplate"))
  throw util.ProtocolError("missing required 'vulnerableTemplate'",{instance:m})
  return m
}