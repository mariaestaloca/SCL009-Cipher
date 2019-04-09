describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33',()=>{
      assert.equal(window.cipher.encode("ABC",33),"HIJ");
    })

    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33',()=>{
      assert.equal(window.cipher.encode("abc",33),"hij");
    })

    it('debería retornar "OVSH TBUKV" para "HOLA MUNDO" con offset 33',()=>{
      assert.equal(window.cipher.encode("ab c",33),"hi j");
    })
    it('debería retornar "456" para "123" con offset 33',()=>{
      assert.equal(window.cipher.encode("123",33),"456");
    })
     it('debería retornar "Ò" para "Ñ" con offset 33',()=>{
      assert.equal(window.cipher.encode("Ñ",33),"Ò");
    })
    it('debería retornar "ó" para "ñ" con offset 33',()=>{
      assert.equal(window.cipher.encode("ñ",33),"ó");
    })


  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33',()=>{
      assert.equal(window.cipher.decode("HIJ",33),"ABC");
    })

    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33',()=>{
      assert.equal(window.cipher.decode("hij",33),"abc");
    })
    it('debería retornar "HOLA MUNDO" para "OVSH TBUKV" con offset 33',()=>{
      assert.equal(window.cipher.decode("hi j",33),"ab c");
    })
    it('debería retornar "012" para "123" con offset 33',()=>{
      assert.equal(window.cipher.decode("123",33),"012");
    })
     it('debería retornar "Ñ" para "Ò" con offset 33',()=>{
      assert.equal(window.cipher.decode("Ò",33),"Ñ");
    })
    it('debería retornar "ñ" para "ó" con offset 33',()=>{
      assert.equal(window.cipher.decode("ó",33),"ñ");
    })
  });

});
