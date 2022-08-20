Feature: Login Test



  Scenario: Getir Login Test
    Given User is on the login page and enters "hello@getir.com" and "hello"
    Then  User login successfully

  # Sepete gidip bos oldugunu verify edelim
  #Anasayfada gorulen kategori listesini yazdir
  #Atistirmalik kategorisinden 2 farkli urun(cikolatali ve magnum) ikiser tane ekleyelim. Anasayfaya geri doner
  #Tekrar sepete gidelim
  #Sepette birer adet daha urunlere ekleme yapalim
  #Urun sayilarini verify edelim
  #Sepetten hepsini silelim
  @wip
  Scenario: Getir basket Test
    Given User is on the login page and enters "hello@getir.com" and "hello"
    Then  User login successfully
    And User verify that basket is empty and able to see "There is no result"
    And User able to see all menu list in console
    And User clicks on "Atıştırmalık"
    And User scroll down to "Ürün 13"
    And User add more items and navigate to main menu
    And User clicks on "Yiyecek"
    And User scroll down to "Ürün 29"
    And User navigate to basket
    Then User verify that "Total Amount : 133 ₺"



