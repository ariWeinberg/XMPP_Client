import { client, xml, jid } from '@xmpp/client';

const xmpp = client({
  service: 'xmpp://ec2-54-162-195-96.compute-1.amazonaws.com:5222/',
  username: 'ari',
  password: '123',
});

xmpp.start().catch(err => {
  console.error('start failed', err);
});

xmpp.on("close",(close = '')=>{
    console.log("close:\n" + close);
});

xmpp.on("closing",(closing = '')=>{
    console.log("closing:\n" + closing);
});

xmpp.on("connect",(connect = '')=>{
    console.log("connect:\n" + connect);
});

xmpp.on("connecting",(connecting = '')=>{
    console.log("connecting:\n" + connecting);
});

xmpp.on("disconnect",(disconnect = '')=>{
    console.log("disconnect:\n" + disconnect);
});

xmpp.on("disconnecting",(disconnecting = '')=>{
    console.log("disconnecting:\n" + disconnecting);
});

xmpp.on("element",(element = '')=>{
    console.log("element:\n" + element);
});

xmpp.on("error",(error = '')=>{
    console.log("error:\n" + error);
});

xmpp.on("input",(input = '')=>{
    console.log("input:\n" + input);
});

xmpp.on("nonza",(nonza = '')=>{
    console.log("nonza:\n" + nonza);
});

xmpp.on("offline",(offline = '')=>{
    console.log("offline:\n" + offline);
});

xmpp.on("online", async(online = '')=>{
    console.log("online:\n" + online);

    //await xmpp.send(xml("presence"));
    await xmpp.send(xml(`<message
    from='ariec2-54-162-195-96.compute-1.amazonaws.com'
    id=`+online.resource+`
    to='aaron@ec2-54-162-195-96.compute-1.amazonaws.com'
    type='chat'
    xml:lang='en'>
  <body>Art thou not Romeo, and a Montague?</body>
</message>`));
});

xmpp.on("open",(open = '')=>{
    console.log("open:\n" + open);
});

xmpp.on("opening",(opening = '')=>{
    console.log("opening:\n" + opening);
});

xmpp.on("send",(send = '')=>{
    console.log("send:\n" + send);
});

xmpp.on("status",(status)=>{
    console.log("status:\n" + status);
});

xmpp.on("stanza", async (stanza)=>{
    console.log("stanza:\n" + stanza);
    
    if (stanza.is("message")) {
        // if(stanza['message']){
        //     console.log("Message: " + stanza['message']['body'] +'\n');
        // }
        await xmpp.send(xml("presence"));
    }
});
