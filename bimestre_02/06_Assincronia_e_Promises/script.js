function testeSincrono(params) {
    for (let index = 0; index < 100; index++) {
        console.log('código bloqueado');
    }
}

testeSincrono();

console.log('Executado após o loop');