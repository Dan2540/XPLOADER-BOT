const _0x90458c=_0x3f94;(function(_0x3dce75,_0x344f84){const _0x2e9ff1=_0x3f94,_0x4c44c7=_0x3dce75();while(!![]){try{const _0x5de3d0=-parseInt(_0x2e9ff1(0x1d1))/0x1+parseInt(_0x2e9ff1(0x23a))/0x2+parseInt(_0x2e9ff1(0x191))/0x3*(parseInt(_0x2e9ff1(0x1fa))/0x4)+-parseInt(_0x2e9ff1(0x1d8))/0x5*(parseInt(_0x2e9ff1(0x238))/0x6)+parseInt(_0x2e9ff1(0x22b))/0x7*(parseInt(_0x2e9ff1(0x1f2))/0x8)+-parseInt(_0x2e9ff1(0x22f))/0x9*(parseInt(_0x2e9ff1(0x1ec))/0xa)+parseInt(_0x2e9ff1(0x1dc))/0xb;if(_0x5de3d0===_0x344f84)break;else _0x4c44c7['push'](_0x4c44c7['shift']());}catch(_0x1e01b0){_0x4c44c7['push'](_0x4c44c7['shift']());}}}(_0x10a0,0xa2d8f),require(_0x90458c(0x194)));const makeWASocket=require(_0x90458c(0x23e))[_0x90458c(0x1f1)],{uncache,nocache}=require(_0x90458c(0x1bf)),{color}=require('./lib/color'),NodeCache=require(_0x90458c(0x17a)),readline=require(_0x90458c(0x25f)),pino=require(_0x90458c(0x173)),{Boom}=require(_0x90458c(0x1c6)),{Low,JSONFile}=require(_0x90458c(0x162)),yargs=require(_0x90458c(0x253)),fs=require('fs'),express=require(_0x90458c(0x1df)),RateLimit=require(_0x90458c(0x1ab)),app=express(),{File}=require(_0x90458c(0x214)),chalk=require(_0x90458c(0x182)),FileType=require('file-type'),path=require('path'),axios=require(_0x90458c(0x25a)),_=require(_0x90458c(0x1ae)),moment=require(_0x90458c(0x25d)),PhoneNumber=require('awesome-phonenumber'),{imageToWebp,videoToWebp,writeExifImg,writeExifVid}=require(_0x90458c(0x24e)),{smsg,isUrl,generateMessageTag,getBuffer,getSizeMedia,fetch,await,sleep,reSize}=require('./lib/myfunc'),{default:XploaderConnect,getAggregateVotesInPollMessage,delay,PHONENUMBER_MCC,makeCacheableSignalKeyStore,useMultiFileAuthState,DisconnectReason,fetchLatestBaileysVersion,generateForwardMessageContent,prepareWAMessageMedia,generateWAMessageFromContent,generateMessageID,downloadContentFromMessage,makeInMemoryStore,jidDecode,proto,Browsers}=require('@whiskeysockets/baileys'),versions=require(_0x90458c(0x1e9))[_0x90458c(0x174)],xdy=moment(Date[_0x90458c(0x258)]())['tz'](''+timezones)[_0x90458c(0x19d)]('en')[_0x90458c(0x204)](_0x90458c(0x180)),xdte=moment(Date[_0x90458c(0x258)]())['tz'](''+timezones)[_0x90458c(0x204)](_0x90458c(0x18d)),port=process['env'][_0x90458c(0x1ba)]||0xbb8,Xliconfeature=()=>{const _0x2f8b14=_0x90458c;var _0x4b09b7=fs[_0x2f8b14(0x17f)]('./Xploader.js')[_0x2f8b14(0x1a6)](),_0x2a019f=(_0x4b09b7[_0x2f8b14(0x266)](/case "/g)||[])['length'];return _0x2a019f;},store=makeInMemoryStore({'logger':pino()[_0x90458c(0x24f)]({'level':_0x90458c(0x236),'stream':_0x90458c(0x249)})});global[_0x90458c(0x199)]=new Object(yargs(process[_0x90458c(0x1bc)][_0x90458c(0x26a)](0x2))['exitProcess'](![])['parse']()),global['db']=new Low(new JSONFile(_0x90458c(0x200))),global[_0x90458c(0x244)]=global['db'],global[_0x90458c(0x231)]=async function loadDatabase(){const _0x48868d=_0x90458c;if(global['db'][_0x48868d(0x216)])return new Promise(_0x2df064=>setInterval(function(){const _0x5d14a8=_0x48868d;!global['db'][_0x5d14a8(0x216)]?(clearInterval(this),_0x2df064(global['db']['data']==null?global[_0x5d14a8(0x231)]():global['db'][_0x5d14a8(0x1c0)])):null;},0x1*0x3e8));if(global['db'][_0x48868d(0x1c0)]!==null)return;global['db'][_0x48868d(0x216)]=!![],await global['db'][_0x48868d(0x215)](),global['db'][_0x48868d(0x216)]=![],global['db'][_0x48868d(0x1c0)]={'users':{},'database':{},'chats':{},'game':{},'settings':{},'message':{},...global['db'][_0x48868d(0x1c0)]||{}},global['db']['chain']=_['chain'](global['db']['data']);},loadDatabase();if(global['db'])setInterval(async()=>{const _0x49813a=_0x90458c;if(global['db'][_0x49813a(0x1c0)])await global['db'][_0x49813a(0x261)]();},0x1e*0x3e8);require('./Xploader.js'),nocache(_0x90458c(0x197),_0x5d896f=>console[_0x90458c(0x1f7)](color(_0x90458c(0x1f8),_0x90458c(0x222)),color('\x27'+_0x5d896f+'\x27','green'),_0x90458c(0x1d0))),require(_0x90458c(0x1ed)),nocache(_0x90458c(0x1c1),_0x3c622e=>console[_0x90458c(0x1f7)](color(_0x90458c(0x1f8),_0x90458c(0x222)),color('\x27'+_0x3c622e+'\x27',_0x90458c(0x222)),_0x90458c(0x1d0)));let phoneNumber=_0x90458c(0x248),owner=JSON[_0x90458c(0x1e4)](fs[_0x90458c(0x17f)](_0x90458c(0x1b2)));function _0x10a0(){const _0x259b5c=['string','src/database.json','「\x20Group\x20Settings\x20Change\x20」\x0a\x0a*Group\x20name\x20has\x20been\x20changed\x20to*\x0a\x0a*','BAE5','writeFileSync','format','sendFile','output','By\x20Tylor','announce','asImage','remoteJid','「\x20Group\x20Settings\x20Change\x20」\x0a\x0aGroup\x20info\x20has\x20been\x20opened,\x20Now\x20participants\x20can\x20edit\x20group\x20info\x20!','creds','then','split',',\x20you\x27re\x20blocked!','┏▣\x20◊\x20`𝗫𝗣𝗟𝗢𝗔𝗗𝗘𝗥\x20𝗕𝗢𝗧`\x20◊\x0a□\x20Xploader\x20has\x20been\x20connected\x20successfully✓\x0a*\x20Bot\x20prefix\x20=\x20[\x20','base64','𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭\x20𝐜𝐨𝐧𝐧𝐞𝐜𝐭𝐞𝐝✓','rate-overlimit','megajs','read','READ','connectionReplaced','ignore','status','\x20]\x0a*\x20\x0a*\x20*`WHATSAPP\x20GROUP`*:\x0a*\x20https://chat.whatsapp.com/B6Hk3829WHYChdpqnuz7bL\x0a*\x20\x0a*\x20*`WHATSAPP\x20CHANNEL`*:\x0a*\x20https://whatsapp.com/channel/0029VamSWUx77qVNJDy1Jf11\x0a*\x20\x0a*\x20©Tylor\x0a*\x20@𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭\x0a*\x20\x0a□\x20\x20\x20','already-exists','public','groupMetadata','bgBlack','isGroup','./session','desc','green','𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭\x20𝐜𝐨𝐧𝐧𝐞𝐜𝐭𝐢𝐧𝐠...','document','test','messages','packname','\x20Has\x20been\x20made\x20an\x20admin\x20in\x20this\x20group!','Xploader\x20session\x20successfully\x20loaded,\x20please\x20wait!!','mime','161GvYmAb','asDocument','connecting','sendTextWithMentions','11633940CkbxVk','includes','loadDatabase','viewOnceMessage','getNumber','WhatsApp','name','silent','restartRequired','1233516NPUDmN','https://mega.nz/file/','1894802wMgztC','contacts','profilePictureUrl','application/octet-stream','@whiskeysockets/baileys','--pairing-code','SESSION_ID','end','My\x20owner\x20can\x27t\x20receive\x20','Cannot\x20use\x20pairing\x20code\x20with\x20mobile\x20API','DATABASE','fatal','isVideo','chat','254796180105','store','magenta','map','--mobile','Device\x20Logged\x20Out,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again.','./lib/exif','child','gray','from','stdout','yargs/yargs','matchAll','demote','Session\x20file\x20found,\x20starting\x20Xploader\x20bot.','conversation','now','groupAcceptInvite','axios','Connection\x20Lost\x20from\x20Server,\x20reconnecting...','getName','moment-timezone','uncaughtException','readline','asSticker','write','sendImageAsSticker','subject','requestPairingCode','block','match','𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭\x20𝐏𝐚𝐢𝐫𝐜𝐨𝐝𝐞:\x20','contacts.update','\x20calls.\x20Sorry,\x20@','slice','alloc','ext','conflict','promises','promote','trim','「\x20Group\x20Settings\x20Change\x20」\x0a\x0aGroup\x20info\x20has\x20been\x20restricted,\x20Now\x20only\x20admin\x20can\x20edit\x20group\x20info\x20!','mtype','./lib/lowdb','viewOnce','Restart\x20Required,\x20Restarting...','connection','json','asVideo','key','join','xpbots.html','@g.us','parseMention','antiswview','connectionLost','statusCode','groups.update','anticall','bold','pino','version','audio/ogg;\x20codecs=opus','receivedPendingNotifications','connectionClosed','BEGIN:VCARD\x0aVERSION:3.0\x0aN:','readViewOnce','node-cache','@s.whatsapp.net','XploaderMedia','readMessages','botname','readFileSync','dddd','messages.upsert','chalk','isBuffer','\x20Contact','getFile','replace','notify','white','Server\x20is\x20running\x20on\x20port:','serializeM','Xploader','「\x20Group\x20Settings\x20Change\x20」\x0a\x0a*Group\x20description\x20has\x20been\x20changed\x20to*\x0a\x0a','DD/MM/YYYY','downloadMediaMessage','HH:mm:ss','concat','24yJFusT','XPLOADER~','session','./settings','Error\x20downloading\x20session\x20data:','Hello\x20there!','../Xploader.js','keys','opts','mimetype','loadMessage','https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60','locale','Please\x20wait\x20for\x20a\x20few\x20seconds\x20to\x20enter\x20your\x20number!','Socket\x20connection\x20timeout','error','asLocation','PHOTO','Loading,please\x20wait!...','status@broadcast','Timed\x20Out','toString','fromBuffer','\x20]\x0a*\x20Total\x20commands\x20=\x20[\x20535\x20]\x0a*\x20Bot\x20version\x20=\x20[\x20','bgWhite','sendMessage','express-rate-limit','𝐍𝐮𝐦𝐛𝐞𝐫\x20𝐭𝐨\x20𝐛𝐞\x20𝐜𝐨𝐧𝐧𝐞𝐜𝐭𝐞𝐝\x20𝐭𝐨\x20𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭?\x0a𝐄𝐱𝐚𝐦𝐩𝐥𝐞\x20254796180105\x20:-\x20','254754783972@s.whatsapp.net','lodash','yellow','server','Session\x20downloaded,\x20starting\x20bot.','./src/data/role/owner.json','voice','fromMe','writeFile','open','action','startsWith','ephemeralMessage','PORT','sendContact','argv','B6Hk3829WHYChdpqnuz7bL','「\x20Group\x20Settings\x20Change\x20」\x0a\x0aGroup\x20has\x20been\x20closed\x20by\x20admin,\x20Now\x20only\x20admins\x20can\x20send\x20messages\x20!','./lib/loader','data','../index.js','red','participant','.bin','sendVideoAsSticker','@hapi/boom','existsSync','restrict','loggedOut','stdin','Unknown\x20DisconnectReason:\x20','message','./Xploader','contextInfo','group-participants.update','Updated','138933pWBpSi','registered','\x20Has\x20been\x20demoted\x20as\x20an\x20admin\x20in\x20this\x20group!','user','length','video','international','20dEueeC','\x0a┗▣','decodeJid','sendText','3743652wyiBme','greenBright','groupevent','express','listen','get','download','「\x20Group\x20Settings\x20Change\x20」\x0a\x0aThe\x20group\x20has\x20been\x20opened\x20by\x20admin,\x20Now\x20participants\x20can\x20send\x20messages\x20!','parse','black','msg','updateBlockStatus','windows','./package.json','copyNForward','adminevent','10KZiuoT','./index.js','\x0aitem1.X-ABLabel:Mobile\x0aEND:VCARD','connection.update','image','default','335656qIvGxa','true','filename','Connection\x20closed,\x20reconnecting....','call','log','[\x20CHANGE\x20]','autoreact','334108SJPwkT','creds.json','quoted','offer','author'];_0x10a0=function(){return _0x259b5c;};return _0x10a0();}const pairingCode=!!phoneNumber||process[_0x90458c(0x1bc)][_0x90458c(0x230)](_0x90458c(0x23f)),useMobile=process[_0x90458c(0x1bc)][_0x90458c(0x230)](_0x90458c(0x24c)),rl=readline['createInterface']({'input':process[_0x90458c(0x1ca)],'output':process[_0x90458c(0x252)]}),question=_0xf201b7=>new Promise(_0x852b48=>rl['question'](_0xf201b7,_0x852b48)),sessionDir=path['join'](__dirname,_0x90458c(0x193)),credsPath=path['join'](sessionDir,_0x90458c(0x1fb));function _0x3f94(_0x379dfe,_0x425044){const _0x10a0c9=_0x10a0();return _0x3f94=function(_0x3f9430,_0x20ce3a){_0x3f9430=_0x3f9430-0x161;let _0x260a5c=_0x10a0c9[_0x3f9430];return _0x260a5c;},_0x3f94(_0x379dfe,_0x425044);}async function downloadSessionData(){const _0x2856cc=_0x90458c;try{if(!fs[_0x2856cc(0x1c7)](credsPath)){if(!global[_0x2856cc(0x240)])return console[_0x2856cc(0x1f7)](color('Session\x20id\x20not\x20found\x20at\x20SESSION_ID!\x0aCreds.json\x20not\x20found\x20at\x20session\x20folder!\x0a\x0aWait\x20to\x20enter\x20your\x20number',_0x2856cc(0x1c2)));const _0x2da90a=global[_0x2856cc(0x240)][_0x2856cc(0x20e)](_0x2856cc(0x192))[0x1],_0x288ee8=File['fromURL'](_0x2856cc(0x239)+_0x2da90a);_0x288ee8[_0x2856cc(0x1e2)](async(_0xb4e059,_0x2cd363)=>{const _0xe6186b=_0x2856cc;if(_0xb4e059)throw _0xb4e059;await fs[_0xe6186b(0x26e)][_0xe6186b(0x1b5)](credsPath,_0x2cd363),console[_0xe6186b(0x1f7)](color(_0xe6186b(0x229),_0xe6186b(0x222))),await startXploader();});}}catch(_0x3e4d85){console[_0x2856cc(0x1a0)](_0x2856cc(0x195),_0x3e4d85);}}async function startXploader(){const _0x3dba06=_0x90458c;let {version:_0x1f6b37,isLatest:_0x3b2b0b}=await fetchLatestBaileysVersion();const {state:_0x47ed4e,saveCreds:_0x27af3a}=await useMultiFileAuthState(_0x3dba06(0x220)),_0x308c43=new NodeCache(),_0x36b8d4=makeWASocket({'logger':pino({'level':_0x3dba06(0x236)}),'printQRInTerminal':!pairingCode,'browser':Browsers[_0x3dba06(0x1e8)]('Firefox'),'auth':{'creds':_0x47ed4e[_0x3dba06(0x20c)],'keys':makeCacheableSignalKeyStore(_0x47ed4e['keys'],pino({'level':_0x3dba06(0x245)})[_0x3dba06(0x24f)]({'level':'fatal'}))},'markOnlineOnConnect':!![],'generateHighQualityLinkPreview':!![],'getMessage':async _0x3ed1e3=>{const _0x1a8f53=_0x3dba06;let _0x5f3c6d=jidNormalizedUser(_0x3ed1e3['remoteJid']),_0x118bde=await store[_0x1a8f53(0x19b)](_0x5f3c6d,_0x3ed1e3['id']);return _0x118bde?.[_0x1a8f53(0x1cc)]||'';},'msgRetryCounterCache':_0x308c43,'defaultQueryTimeoutMs':undefined});store['bind'](_0x36b8d4['ev']);if(pairingCode&&!_0x36b8d4['authState'][_0x3dba06(0x20c)][_0x3dba06(0x1d2)]){if(useMobile)throw new Error(_0x3dba06(0x243));let _0x42dd80;_0x42dd80=await question(chalk[_0x3dba06(0x21e)](chalk[_0x3dba06(0x1dd)](_0x3dba06(0x1ac)))),_0x42dd80=_0x42dd80[_0x3dba06(0x270)](),setTimeout(async()=>{const _0x49a272=_0x3dba06,_0x497b7a=await _0x36b8d4[_0x49a272(0x264)](_0x42dd80);console[_0x49a272(0x1f7)](chalk[_0x49a272(0x1e5)](chalk[_0x49a272(0x1a9)](_0x49a272(0x267)+_0x497b7a)));},0xbb8);}return _0x36b8d4['ev']['on'](_0x3dba06(0x1ef),async _0x6f3ee5=>{const _0x37ad47=_0x3dba06,{connection:_0x4f62c5,lastDisconnect:_0x75b226}=_0x6f3ee5;try{if(_0x4f62c5==='close'){let _0x352685=new Boom(_0x75b226?.[_0x37ad47(0x1a0)])?.[_0x37ad47(0x206)][_0x37ad47(0x16f)];if(_0x352685===DisconnectReason['badSession'])console[_0x37ad47(0x1f7)]('Bad\x20Session\x20File,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again'),startXploader();else{if(_0x352685===DisconnectReason[_0x37ad47(0x177)])console[_0x37ad47(0x1f7)](_0x37ad47(0x1f5)),startXploader();else{if(_0x352685===DisconnectReason[_0x37ad47(0x16e)])console[_0x37ad47(0x1f7)](_0x37ad47(0x25b)),startXploader();else{if(_0x352685===DisconnectReason[_0x37ad47(0x217)])console['log']('Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Close\x20Current\x20Session\x20First'),startXploader();else{if(_0x352685===DisconnectReason[_0x37ad47(0x1c9)])console[_0x37ad47(0x1f7)](_0x37ad47(0x24d)),startXploader();else{if(_0x352685===DisconnectReason[_0x37ad47(0x237)])console[_0x37ad47(0x1f7)](_0x37ad47(0x164)),startXploader();else{if(_0x352685===DisconnectReason['timedOut'])console[_0x37ad47(0x1f7)]('Connection\x20TimedOut,\x20Reconnecting...'),startXploader();else _0x36b8d4[_0x37ad47(0x241)](_0x37ad47(0x1cb)+_0x352685+'|'+_0x4f62c5);}}}}}}}(_0x6f3ee5[_0x37ad47(0x165)]==_0x37ad47(0x22d)||_0x6f3ee5[_0x37ad47(0x176)]=='false')&&console[_0x37ad47(0x1f7)](color(_0x37ad47(0x223),'red')),(_0x6f3ee5[_0x37ad47(0x165)]==_0x37ad47(0x1b6)||_0x6f3ee5[_0x37ad47(0x176)]==_0x37ad47(0x1f3))&&(console[_0x37ad47(0x1f7)](color('\x20',_0x37ad47(0x24a))),console[_0x37ad47(0x1f7)](color(_0x37ad47(0x212),_0x37ad47(0x222))),await delay(0x7cf),console[_0x37ad47(0x1f7)](chalk[_0x37ad47(0x188)][_0x37ad47(0x172)](chalk[_0x37ad47(0x250)][_0x37ad47(0x172)](_0x37ad47(0x196))+'\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x0aThis\x20is:\x0a\x0a┏━┓┏━┓┃┃┃┓┃┃┃┃┃┃┃┃┃┏┓┃┃┃┃┃\x0a┗┓┗┛┏┛┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃\x0a┃┗┓┏┛┃━━┓┃┃━━┓━━┓┃━┛┃━━┓━┓\x0a┃┏┛┗┓┃┏┓┃┃┃┏┓┃┃┓┃┃┏┓┃┏┓┃┏┛\x0a┏┛┏┓┗┓┗┛┃┗┓┗┛┃┗┛┗┓┗┛┃┃━┫┃┃\x0a┗━┛┗━┛┏━┛━┛━━┛━━━┛━━┛━━┛┛┃\x0a┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃\x0a┃┃┃┃┃┃┛┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃┃\x0a\x0a\x0a┏━━┓┃┃┃┃┏┓┃\x0a┃┏┓┃┃┃┃┃┛┗┓\x0a┃┗┛┗┓━━┓┓┏┛\x0a┃┏━┓┃┏┓┃┃┃┃\x0a┃┗━┛┃┗┛┃┃┗┓\x0a┗━━━┛━━┛┗━┛\x0a┃┃┃┃┃┃┃┃┃┃┃\x0a┃┃┃┃┃┃┃┃┃┃┃\x0a\x0a\x0a'+chalk['green'][_0x37ad47(0x172)](_0x37ad47(0x207))+'\x0a'+chalk['yellow']['bold'](_0x37ad47(0x1a3))+'\x0a')),await sleep(0x7d0),_0x36b8d4[_0x37ad47(0x259)](_0x37ad47(0x1bd)),_0x36b8d4[_0x37ad47(0x1aa)](_0x36b8d4[_0x37ad47(0x1d4)]['id'],{'text':_0x37ad47(0x210)+xprefix+_0x37ad47(0x1a8)+versions+_0x37ad47(0x21a)+xdte+',\x20'+xdy+_0x37ad47(0x1d9)},{'ephemeralExpiration':0x14}));}catch(_0x40ff3e){console['log']('Error\x20in\x20Connection.update\x20'+_0x40ff3e),startXploader();}}),_0x36b8d4['ev']['on']('creds.update',_0x27af3a),_0x36b8d4['ev']['on'](_0x3dba06(0x181),()=>{}),_0x36b8d4['ev']['on'](_0x3dba06(0x1f6),async _0x36c8b0=>{const _0x1f8ec2=_0x3dba06;if(global[_0x1f8ec2(0x171)]){if(_0x36c8b0[_0x1f8ec2(0x21f)])return;if(_0x36c8b0['status']===_0x1f8ec2(0x1fd)){const _0x5b7514=_0x1f8ec2(0x242)+(_0x36c8b0[_0x1f8ec2(0x246)]?_0x1f8ec2(0x1d6):_0x1f8ec2(0x1b3))+_0x1f8ec2(0x269)+_0x36c8b0[_0x1f8ec2(0x251)][_0x1f8ec2(0x20e)]('@')[0x0]+_0x1f8ec2(0x20f);await _0x36b8d4[_0x1f8ec2(0x22e)](_0x36c8b0['from'],_0x5b7514),await _0x36b8d4[_0x1f8ec2(0x1bb)](_0x36c8b0[_0x1f8ec2(0x251)],owner),await sleep(0x1f40),await _0x36b8d4[_0x1f8ec2(0x1e7)](_0x36c8b0[_0x1f8ec2(0x251)],_0x1f8ec2(0x265));}}}),_0x36b8d4['ev']['on'](_0x3dba06(0x181),async _0x461bda=>{const _0x450581=_0x3dba06;global[_0x450581(0x16d)]&&(mek=_0x461bda[_0x450581(0x226)][0x0],mek['key']&&mek[_0x450581(0x168)]['remoteJid']===_0x450581(0x1a4)&&await _0x36b8d4[_0x450581(0x17d)]([mek[_0x450581(0x168)]]));}),_0x36b8d4['ev']['on'](_0x3dba06(0x181),async _0x564c12=>{const _0x14638b=_0x3dba06;if(global[_0x14638b(0x1f9)]){mek=_0x564c12[_0x14638b(0x226)][0x0];if(mek[_0x14638b(0x168)]&&mek[_0x14638b(0x168)][_0x14638b(0x20a)]==='status@broadcast'){const _0x59fe54=await _0x36b8d4[_0x14638b(0x1da)](_0x36b8d4[_0x14638b(0x1d4)]['id']);await _0x36b8d4[_0x14638b(0x1aa)](mek[_0x14638b(0x168)][_0x14638b(0x20a)],{'react':{'key':mek[_0x14638b(0x168)],'text':''+statusemoji}},{'statusJidList':[mek[_0x14638b(0x168)][_0x14638b(0x1c3)],_0x59fe54]});}}}),_0x36b8d4['ev']['on'](_0x3dba06(0x1cf),async _0x3d0a20=>{const _0x3e63f4=_0x3dba06;if(global[_0x3e63f4(0x1eb)]){console[_0x3e63f4(0x1f7)](_0x3d0a20);try{let _0x19c1ff=_0x3d0a20['participants'];for(let _0x445b9c of _0x19c1ff){try{ppuser=await _0x36b8d4['profilePictureUrl'](_0x445b9c,_0x3e63f4(0x1f0));}catch(_0x3ff797){ppuser='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60';}try{ppgroup=await _0x36b8d4[_0x3e63f4(0x23c)](_0x3d0a20['id'],_0x3e63f4(0x1f0));}catch(_0x296410){ppgroup=_0x3e63f4(0x19c);}if(_0x3d0a20[_0x3e63f4(0x1b7)]==_0x3e63f4(0x26f)){const _0x5ed6fd=moment['tz'](''+timezones)[_0x3e63f4(0x204)]('HH:mm:ss'),_0x355b29=moment['tz'](''+timezones)[_0x3e63f4(0x204)]('DD/MM/YYYY');let _0x592bc5=_0x445b9c;xeonbody='@'+_0x592bc5['split']('@')[0x0]+_0x3e63f4(0x228),_0x36b8d4[_0x3e63f4(0x1aa)](_0x3d0a20['id'],{'text':xeonbody,'contextInfo':{'mentionedJid':[_0x445b9c],'externalAdReply':{'showAdAttribution':!![],'containsAutoReply':!![],'title':'\x20'+global[_0x3e63f4(0x17e)],'body':''+ownername,'previewType':_0x3e63f4(0x1a2),'thumbnailUrl':'','thumbnail':XeonWlcm,'sourceUrl':''+wagc}}});}else{if(_0x3d0a20[_0x3e63f4(0x1b7)]==_0x3e63f4(0x255)){const _0x16b0a4=moment['tz'](''+timezones)[_0x3e63f4(0x204)](_0x3e63f4(0x18f)),_0x4cd91d=moment['tz'](''+timezones)['format'](_0x3e63f4(0x18d));let _0x2d72f8=_0x445b9c;xeonbody='@'+_0x2d72f8[_0x3e63f4(0x20e)]('@')[0x0]+_0x3e63f4(0x1d3),_0x36b8d4[_0x3e63f4(0x1aa)](_0x3d0a20['id'],{'text':xeonbody,'contextInfo':{'mentionedJid':[_0x445b9c],'externalAdReply':{'showAdAttribution':!![],'containsAutoReply':!![],'title':'\x20'+global[_0x3e63f4(0x17e)],'body':''+ownername,'previewType':_0x3e63f4(0x1a2),'thumbnailUrl':'','thumbnail':XeonLft,'sourceUrl':''+wagc}}});}}}}catch(_0xfa9bb4){console[_0x3e63f4(0x1f7)](_0xfa9bb4);}}}),_0x36b8d4['ev']['on'](_0x3dba06(0x170),async _0x78929=>{const _0x5242e6=_0x3dba06;if(global[_0x5242e6(0x1de)]){try{ppgroup=await _0x36b8d4[_0x5242e6(0x23c)](anu['id'],_0x5242e6(0x1f0));}catch(_0x4bd992){ppgroup='https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60';}console['log'](_0x78929);const _0x4a1357=_0x78929[0x0];if(_0x4a1357[_0x5242e6(0x208)]==!![])await sleep(0x7d0),_0x36b8d4[_0x5242e6(0x1aa)](_0x4a1357['id'],{'text':_0x5242e6(0x1be)});else{if(_0x4a1357[_0x5242e6(0x208)]==![])await sleep(0x7d0),_0x36b8d4[_0x5242e6(0x1aa)](_0x4a1357['id'],{'text':_0x5242e6(0x1e3)});else{if(_0x4a1357[_0x5242e6(0x1c8)]==!![])await sleep(0x7d0),_0x36b8d4[_0x5242e6(0x1aa)](_0x4a1357['id'],{'text':_0x5242e6(0x271)});else{if(_0x4a1357[_0x5242e6(0x1c8)]==![])await sleep(0x7d0),_0x36b8d4['sendMessage'](_0x4a1357['id'],{'text':_0x5242e6(0x20b)});else!_0x4a1357['desc']==''?(await sleep(0x7d0),_0x36b8d4[_0x5242e6(0x1aa)](_0x4a1357['id'],{'text':_0x5242e6(0x18c)+_0x4a1357[_0x5242e6(0x221)]})):(await sleep(0x7d0),_0x36b8d4[_0x5242e6(0x1aa)](_0x4a1357['id'],{'text':_0x5242e6(0x201)+_0x4a1357[_0x5242e6(0x263)]+'*'}));}}}}}),_0x36b8d4['ev']['on'](_0x3dba06(0x181),async _0x8f7556=>{const _0x548ce8=_0x3dba06;try{mek=_0x8f7556[_0x548ce8(0x226)][0x0];if(!mek[_0x548ce8(0x1cc)])return;mek[_0x548ce8(0x1cc)]=Object['keys'](mek['message'])[0x0]===_0x548ce8(0x1b9)?mek[_0x548ce8(0x1cc)][_0x548ce8(0x1b9)][_0x548ce8(0x1cc)]:mek[_0x548ce8(0x1cc)];if(mek[_0x548ce8(0x168)]&&mek['key']['remoteJid']===_0x548ce8(0x1a4))return;if(!_0x36b8d4['public']&&!mek[_0x548ce8(0x168)][_0x548ce8(0x1b4)]&&_0x8f7556['type']===_0x548ce8(0x187))return;if(mek['key']['id'][_0x548ce8(0x1b8)](_0x548ce8(0x18b))&&mek[_0x548ce8(0x168)]['id'][_0x548ce8(0x1d5)]===0x10)return;if(mek[_0x548ce8(0x168)]['id'][_0x548ce8(0x1b8)](_0x548ce8(0x202)))return;m=smsg(_0x36b8d4,mek,store),require(_0x548ce8(0x1cd))(_0x36b8d4,m,_0x8f7556,store),mek[_0x548ce8(0x168)][_0x548ce8(0x1b4)]===![]&&mek[_0x548ce8(0x168)][_0x548ce8(0x20a)]===_0x548ce8(0x1ad)&&_0x36b8d4[_0x548ce8(0x1aa)](m[_0x548ce8(0x247)],{'react':{'text':'👑','key':mek[_0x548ce8(0x168)]}});}catch(_0x4607b0){console['log'](_0x4607b0);}}),_0x36b8d4[_0x3dba06(0x1da)]=_0x12a049=>{const _0x384cee=_0x3dba06;if(!_0x12a049)return _0x12a049;if(/:\d+@/gi['test'](_0x12a049)){let _0x74c361=jidDecode(_0x12a049)||{};return _0x74c361[_0x384cee(0x1d4)]&&_0x74c361[_0x384cee(0x1b0)]&&_0x74c361[_0x384cee(0x1d4)]+'@'+_0x74c361['server']||_0x12a049;}else return _0x12a049;},_0x36b8d4['ev']['on'](_0x3dba06(0x268),_0x455596=>{const _0x12cb8b=_0x3dba06;for(let _0x201df1 of _0x455596){let _0x455861=_0x36b8d4[_0x12cb8b(0x1da)](_0x201df1['id']);if(store&&store['contacts'])store['contacts'][_0x455861]={'id':_0x455861,'name':_0x201df1['notify']};}}),_0x36b8d4['getName']=(_0x5ef103,_0xdeee3a=![])=>{const _0xa7c004=_0x3dba06;id=_0x36b8d4['decodeJid'](_0x5ef103),_0xdeee3a=_0x36b8d4['withoutContact']||_0xdeee3a;let _0x36f2a2;if(id['endsWith'](_0xa7c004(0x16b)))return new Promise(async _0x41c64f=>{const _0x1536ed=_0xa7c004;_0x36f2a2=store[_0x1536ed(0x23b)][id]||{};if(!(_0x36f2a2[_0x1536ed(0x235)]||_0x36f2a2['subject']))_0x36f2a2=_0x36b8d4[_0x1536ed(0x21d)](id)||{};_0x41c64f(_0x36f2a2[_0x1536ed(0x235)]||_0x36f2a2[_0x1536ed(0x263)]||PhoneNumber('+'+id[_0x1536ed(0x186)]('@s.whatsapp.net',''))[_0x1536ed(0x233)](_0x1536ed(0x1d7)));});else _0x36f2a2=id==='0@s.whatsapp.net'?{'id':id,'name':_0xa7c004(0x234)}:id===_0x36b8d4['decodeJid'](_0x36b8d4['user']['id'])?_0x36b8d4['user']:store['contacts'][id]||{};return(_0xdeee3a?'':_0x36f2a2[_0xa7c004(0x235)])||_0x36f2a2[_0xa7c004(0x263)]||_0x36f2a2['verifiedName']||PhoneNumber('+'+_0x5ef103[_0xa7c004(0x186)](_0xa7c004(0x17b),''))[_0xa7c004(0x233)]('international');},_0x36b8d4[_0x3dba06(0x1bb)]=async(_0x1c5d60,_0x19808b,_0x4eefa0='',_0x3ceae2={})=>{const _0x26928b=_0x3dba06;let _0xa4bf18=[];for(let _0x310a4d of _0x19808b){_0xa4bf18['push']({'displayName':await _0x36b8d4['getName'](_0x310a4d),'vcard':_0x26928b(0x178)+await _0x36b8d4[_0x26928b(0x25c)](_0x310a4d)+'\x0aFN:'+await _0x36b8d4[_0x26928b(0x25c)](_0x310a4d)+'\x0aitem1.TEL;waid='+_0x310a4d[_0x26928b(0x20e)]('@')[0x0]+':'+_0x310a4d[_0x26928b(0x20e)]('@')[0x0]+_0x26928b(0x1ee)});}_0x36b8d4[_0x26928b(0x1aa)](_0x1c5d60,{'contacts':{'displayName':_0xa4bf18[_0x26928b(0x1d5)]+_0x26928b(0x184),'contacts':_0xa4bf18},..._0x3ceae2},{'quoted':_0x4eefa0});},_0x36b8d4[_0x3dba06(0x21c)]=!![],_0x36b8d4[_0x3dba06(0x18a)]=_0x1c4517=>smsg(_0x36b8d4,_0x1c4517,store),_0x36b8d4[_0x3dba06(0x1db)]=(_0x9e9608,_0x33e279,_0x563dfa='',_0x3e1f2b)=>_0x36b8d4[_0x3dba06(0x1aa)](_0x9e9608,{'text':_0x33e279,..._0x3e1f2b},{'quoted':_0x563dfa,..._0x3e1f2b}),_0x36b8d4['sendImage']=async(_0x3c6a58,_0x25e3a7,_0x170b56='',_0x42f10c='',_0x3bcbee)=>{const _0x317d31=_0x3dba06;let _0x2adec9=Buffer[_0x317d31(0x183)](_0x25e3a7)?_0x25e3a7:/^data:.*?\/.*?;base64,/i[_0x317d31(0x225)](_0x25e3a7)?Buffer['from'](_0x25e3a7[_0x317d31(0x20e)]`,`[0x1],_0x317d31(0x211)):/^https?:\/\//[_0x317d31(0x225)](_0x25e3a7)?await await getBuffer(_0x25e3a7):fs[_0x317d31(0x1c7)](_0x25e3a7)?fs['readFileSync'](_0x25e3a7):Buffer['alloc'](0x0);return await _0x36b8d4[_0x317d31(0x1aa)](_0x3c6a58,{'image':_0x2adec9,'caption':_0x170b56,..._0x3bcbee},{'quoted':_0x42f10c});},_0x36b8d4[_0x3dba06(0x22e)]=async(_0x37c88a,_0x40687c,_0x58cfbb,_0x30e06e={})=>_0x36b8d4[_0x3dba06(0x1aa)](_0x37c88a,{'text':_0x40687c,'mentions':[..._0x40687c[_0x3dba06(0x254)](/@(\d{0,16})/g)]['map'](_0x180c98=>_0x180c98[0x1]+'@s.whatsapp.net'),..._0x30e06e},{'quoted':_0x58cfbb}),_0x36b8d4[_0x3dba06(0x262)]=async(_0x5a06c3,_0x6da868,_0x15a458,_0x110c0f={})=>{const _0x343503=_0x3dba06;let _0x17209b=Buffer[_0x343503(0x183)](_0x6da868)?_0x6da868:/^data:.*?\/.*?;base64,/i[_0x343503(0x225)](_0x6da868)?Buffer[_0x343503(0x251)](_0x6da868[_0x343503(0x20e)]`,`[0x1],_0x343503(0x211)):/^https?:\/\//['test'](_0x6da868)?await await getBuffer(_0x6da868):fs[_0x343503(0x1c7)](_0x6da868)?fs[_0x343503(0x17f)](_0x6da868):Buffer[_0x343503(0x26b)](0x0),_0x4ac19a;_0x110c0f&&(_0x110c0f[_0x343503(0x227)]||_0x110c0f[_0x343503(0x1fe)])?_0x4ac19a=await writeExifImg(_0x17209b,_0x110c0f):_0x4ac19a=await imageToWebp(_0x17209b),await _0x36b8d4[_0x343503(0x1aa)](_0x5a06c3,{'sticker':{'url':_0x4ac19a},..._0x110c0f},{'quoted':_0x15a458})[_0x343503(0x20d)](_0x43f7ad=>{return fs['unlinkSync'](_0x4ac19a),_0x43f7ad;});},_0x36b8d4[_0x3dba06(0x1c5)]=async(_0x3a5f45,_0x20367c,_0x460dfc,_0x1d3ae2={})=>{const _0x52ffa9=_0x3dba06;let _0x3e1c1e=Buffer[_0x52ffa9(0x183)](_0x20367c)?_0x20367c:/^data:.*?\/.*?;base64,/i[_0x52ffa9(0x225)](_0x20367c)?Buffer[_0x52ffa9(0x251)](_0x20367c[_0x52ffa9(0x20e)]`,`[0x1],_0x52ffa9(0x211)):/^https?:\/\//[_0x52ffa9(0x225)](_0x20367c)?await await getBuffer(_0x20367c):fs[_0x52ffa9(0x1c7)](_0x20367c)?fs[_0x52ffa9(0x17f)](_0x20367c):Buffer['alloc'](0x0),_0x1d3bc0;return _0x1d3ae2&&(_0x1d3ae2[_0x52ffa9(0x227)]||_0x1d3ae2['author'])?_0x1d3bc0=await writeExifVid(_0x3e1c1e,_0x1d3ae2):_0x1d3bc0=await videoToWebp(_0x3e1c1e),await _0x36b8d4['sendMessage'](_0x3a5f45,{'sticker':{'url':_0x1d3bc0},..._0x1d3ae2},{'quoted':_0x460dfc}),_0x1d3bc0;},_0x36b8d4['downloadAndSaveMediaMessage']=async(_0x14a1f1,_0xed7276,_0x9f4609=!![])=>{const _0x52fa3a=_0x3dba06;let _0x5e94a4=_0x14a1f1['msg']?_0x14a1f1[_0x52fa3a(0x1e6)]:_0x14a1f1,_0x33b6dd=(_0x14a1f1[_0x52fa3a(0x1e6)]||_0x14a1f1)[_0x52fa3a(0x19a)]||'',_0x686aad=_0x14a1f1[_0x52fa3a(0x161)]?_0x14a1f1[_0x52fa3a(0x161)][_0x52fa3a(0x186)](/Message/gi,''):_0x33b6dd[_0x52fa3a(0x20e)]('/')[0x0];const _0x369f5f=await downloadContentFromMessage(_0x5e94a4,_0x686aad);let _0x2f63c3=Buffer[_0x52fa3a(0x251)]([]);for await(const _0xd288b5 of _0x369f5f){_0x2f63c3=Buffer[_0x52fa3a(0x190)]([_0x2f63c3,_0xd288b5]);}let _0x4c59c4=await FileType[_0x52fa3a(0x1a7)](_0x2f63c3);return trueFileName=_0x9f4609?_0xed7276+'.'+_0x4c59c4[_0x52fa3a(0x26c)]:_0xed7276,await fs[_0x52fa3a(0x203)](trueFileName,_0x2f63c3),trueFileName;},_0x36b8d4[_0x3dba06(0x185)]=async(_0x1a86af,_0x72cee)=>{const _0x9a76ee=_0x3dba06;let _0x29f635,_0x1fe89e=Buffer[_0x9a76ee(0x183)](_0x1a86af)?_0x1a86af:/^data:.*?\/.*?;base64,/i['test'](_0x1a86af)?Buffer[_0x9a76ee(0x251)](_0x1a86af[_0x9a76ee(0x20e)]`,`[0x1],_0x9a76ee(0x211)):/^https?:\/\//[_0x9a76ee(0x225)](_0x1a86af)?await(_0x29f635=await getBuffer(_0x1a86af)):fs['existsSync'](_0x1a86af)?(filename=_0x1a86af,fs[_0x9a76ee(0x17f)](_0x1a86af)):typeof _0x1a86af===_0x9a76ee(0x1ff)?_0x1a86af:Buffer[_0x9a76ee(0x26b)](0x0),_0x40010c=await FileType[_0x9a76ee(0x1a7)](_0x1fe89e)||{'mime':_0x9a76ee(0x23d),'ext':_0x9a76ee(0x1c4)};filename=path[_0x9a76ee(0x169)](__filename,'../src/'+new Date()*0x1+'.'+_0x40010c[_0x9a76ee(0x26c)]);if(_0x1fe89e&&_0x72cee)fs[_0x9a76ee(0x26e)][_0x9a76ee(0x1b5)](filename,_0x1fe89e);return{'res':_0x29f635,'filename':filename,'size':await getSizeMedia(_0x1fe89e),..._0x40010c,'data':_0x1fe89e};},_0x36b8d4[_0x3dba06(0x205)]=async(_0x3af435,_0x5afc45,_0x121e84='',_0x13f4f5='',_0x92089f,_0xeee719=![],_0x560591={})=>{const _0x345149=_0x3dba06;let _0x1db41c=await _0x36b8d4['getFile'](_0x5afc45,!![]),{res:_0x4d2aef,data:_0x4a2606,filename:_0x4c85c6}=_0x1db41c;if(_0x4d2aef&&_0x4d2aef[_0x345149(0x219)]!==0xc8||_0x4a2606['length']<=0x10000)try{throw{'json':JSON[_0x345149(0x1e4)](_0x4a2606[_0x345149(0x1a6)]())};}catch(_0x8584f4){if(_0x8584f4[_0x345149(0x166)])throw _0x8584f4[_0x345149(0x166)];}let _0x33d8e2={'filename':_0x121e84};if(_0x92089f)_0x33d8e2[_0x345149(0x1fc)]=_0x92089f;if(!_0x1db41c)_0x560591[_0x345149(0x22c)]=!![];let _0x2c64bb='',_0x483d9a=_0x1db41c[_0x345149(0x22a)],_0x3b0984;if(/webp/[_0x345149(0x225)](_0x1db41c[_0x345149(0x22a)])||/image/[_0x345149(0x225)](_0x1db41c[_0x345149(0x22a)])&&_0x560591[_0x345149(0x260)])_0x2c64bb='sticker';else{if(/image/[_0x345149(0x225)](_0x1db41c[_0x345149(0x22a)])||/webp/[_0x345149(0x225)](_0x1db41c['mime'])&&_0x560591[_0x345149(0x209)])_0x2c64bb=_0x345149(0x1f0);else{if(/video/[_0x345149(0x225)](_0x1db41c[_0x345149(0x22a)]))_0x2c64bb='video';else{if(/audio/[_0x345149(0x225)](_0x1db41c[_0x345149(0x22a)]))_0x3b0984=await(_0xeee719?toPTT:toAudio)(_0x4a2606,_0x1db41c[_0x345149(0x26c)]),_0x4a2606=_0x3b0984[_0x345149(0x1c0)],_0x4c85c6=_0x3b0984[_0x345149(0x1f4)],_0x2c64bb='audio',_0x483d9a=_0x345149(0x175);else _0x2c64bb=_0x345149(0x224);}}}if(_0x560591[_0x345149(0x22c)])_0x2c64bb=_0x345149(0x224);delete _0x560591[_0x345149(0x260)],delete _0x560591[_0x345149(0x1a1)],delete _0x560591[_0x345149(0x167)],delete _0x560591[_0x345149(0x22c)],delete _0x560591[_0x345149(0x209)];let _0x184e58={..._0x560591,'caption':_0x13f4f5,'ptt':_0xeee719,[_0x2c64bb]:{'url':_0x4c85c6},'mimetype':_0x483d9a},_0x5b6d97;try{_0x5b6d97=await _0x36b8d4[_0x345149(0x1aa)](_0x3af435,_0x184e58,{..._0x33d8e2,..._0x560591});}catch(_0x5c00f6){_0x5b6d97=null;}finally{if(!_0x5b6d97)_0x5b6d97=await _0x36b8d4[_0x345149(0x1aa)](_0x3af435,{..._0x184e58,[_0x2c64bb]:_0x4a2606},{..._0x33d8e2,..._0x560591});return _0x4a2606=null,_0x5b6d97;}},_0x36b8d4[_0x3dba06(0x1ea)]=async(_0x61a45f,_0x21cd2e,_0x4a8d88=![],_0x1c6e20={})=>{const _0xd56538=_0x3dba06;let _0xf369c7;_0x1c6e20[_0xd56538(0x179)]&&(_0x21cd2e[_0xd56538(0x1cc)]=_0x21cd2e[_0xd56538(0x1cc)]&&_0x21cd2e[_0xd56538(0x1cc)][_0xd56538(0x1b9)]&&_0x21cd2e[_0xd56538(0x1cc)][_0xd56538(0x1b9)][_0xd56538(0x1cc)]?_0x21cd2e[_0xd56538(0x1cc)][_0xd56538(0x1b9)][_0xd56538(0x1cc)]:_0x21cd2e[_0xd56538(0x1cc)]||undefined,_0xf369c7=Object[_0xd56538(0x198)](_0x21cd2e[_0xd56538(0x1cc)][_0xd56538(0x232)]['message'])[0x0],delete(_0x21cd2e['message']&&_0x21cd2e[_0xd56538(0x1cc)][_0xd56538(0x218)]?_0x21cd2e[_0xd56538(0x1cc)][_0xd56538(0x218)]:_0x21cd2e[_0xd56538(0x1cc)]||undefined),delete _0x21cd2e[_0xd56538(0x1cc)][_0xd56538(0x232)][_0xd56538(0x1cc)][_0xf369c7][_0xd56538(0x163)],_0x21cd2e[_0xd56538(0x1cc)]={..._0x21cd2e[_0xd56538(0x1cc)][_0xd56538(0x232)][_0xd56538(0x1cc)]});let _0x33e283=Object[_0xd56538(0x198)](_0x21cd2e[_0xd56538(0x1cc)])[0x0],_0x17be46=await generateForwardMessageContent(_0x21cd2e,_0x4a8d88),_0x4a9cf3=Object[_0xd56538(0x198)](_0x17be46)[0x0],_0x590f21={};if(_0x33e283!=_0xd56538(0x257))_0x590f21=_0x21cd2e[_0xd56538(0x1cc)][_0x33e283][_0xd56538(0x1ce)];_0x17be46[_0x4a9cf3][_0xd56538(0x1ce)]={..._0x590f21,..._0x17be46[_0x4a9cf3]['contextInfo']};const _0xd47b7f=await generateWAMessageFromContent(_0x61a45f,_0x17be46,_0x1c6e20?{..._0x17be46[_0x4a9cf3],..._0x1c6e20,..._0x1c6e20[_0xd56538(0x1ce)]?{'contextInfo':{..._0x17be46[_0x4a9cf3]['contextInfo'],..._0x1c6e20[_0xd56538(0x1ce)]}}:{}}:{});return await _0x36b8d4['relayMessage'](_0x61a45f,_0xd47b7f[_0xd56538(0x1cc)],{'messageId':_0xd47b7f[_0xd56538(0x168)]['id']}),_0xd47b7f;},_0x36b8d4['sendPoll']=(_0x8b6c66,_0x5ce589='',_0x2fee78=[],_0x4d0a20=0x1)=>{return _0x36b8d4['sendMessage'](_0x8b6c66,{'poll':{'name':_0x5ce589,'values':_0x2fee78,'selectableCount':_0x4d0a20}});},_0x36b8d4[_0x3dba06(0x16c)]=(_0x52d8fb='')=>{const _0x24262f=_0x3dba06;return[..._0x52d8fb[_0x24262f(0x254)](/@([0-9]{5,16}|0)/g)][_0x24262f(0x24b)](_0x1832ec=>_0x1832ec[0x1]+_0x24262f(0x17b));},_0x36b8d4[_0x3dba06(0x18e)]=async _0x349cb1=>{const _0x2e570a=_0x3dba06;let _0xd6b53c=(_0x349cb1[_0x2e570a(0x1e6)]||_0x349cb1)[_0x2e570a(0x19a)]||'',_0x46e86e=_0x349cb1['mtype']?_0x349cb1[_0x2e570a(0x161)]['replace'](/Message/gi,''):_0xd6b53c[_0x2e570a(0x20e)]('/')[0x0];const _0x147210=await downloadContentFromMessage(_0x349cb1,_0x46e86e);let _0x110ded=Buffer['from']([]);for await(const _0x24b0c4 of _0x147210){_0x110ded=Buffer[_0x2e570a(0x190)]([_0x110ded,_0x24b0c4]);}return _0x110ded;},_0x36b8d4;}async function init(){const _0x434b58=_0x90458c;if(fs['existsSync'](credsPath))console[_0x434b58(0x1f7)](color(_0x434b58(0x256),'yellow')),await startXploader();else{const _0x1080a2=await downloadSessionData();_0x1080a2?(console['log'](_0x434b58(0x1b1)),await startXploader()):!fs[_0x434b58(0x1c7)](credsPath)&&(!global[_0x434b58(0x240)]&&(console[_0x434b58(0x1f7)](color(_0x434b58(0x19e),_0x434b58(0x1c2))),await startXploader()));}}const porDir=path[_0x90458c(0x169)](__dirname,_0x90458c(0x17c)),porPath=path[_0x90458c(0x169)](porDir,_0x90458c(0x16a)),limiter=RateLimit({'windowMs':0xf*0x3c*0x3e8,'max':0x64});app[_0x90458c(0x1e1)]('/',limiter,(_0x44121f,_0x387b7c)=>{const _0x1fe268=_0x90458c;_0x387b7c[_0x1fe268(0x205)](porPath);}),app[_0x90458c(0x1e0)](port,()=>console[_0x90458c(0x1f7)](color(_0x90458c(0x189)+port,_0x90458c(0x1af)))),init(),process['on'](_0x90458c(0x25e),function(_0x30c3ac){const _0x487ee6=_0x90458c;let _0x7d12be=String(_0x30c3ac);if(_0x7d12be[_0x487ee6(0x230)](_0x487ee6(0x26d)))return;if(_0x7d12be['includes'](_0x487ee6(0x19f)))return;if(_0x7d12be[_0x487ee6(0x230)]('not-authorized'))return;if(_0x7d12be['includes'](_0x487ee6(0x21b)))return;if(_0x7d12be[_0x487ee6(0x230)](_0x487ee6(0x213)))return;if(_0x7d12be[_0x487ee6(0x230)]('Connection\x20Closed'))return;if(_0x7d12be[_0x487ee6(0x230)](_0x487ee6(0x1a5)))return;if(_0x7d12be['includes']('Value\x20not\x20found'))return;console['log']('Caught\x20exception:\x20',_0x30c3ac);});