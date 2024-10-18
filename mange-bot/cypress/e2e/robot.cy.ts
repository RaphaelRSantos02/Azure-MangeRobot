/// <reference types="cypress" />

const el = {
  homeContainer: ()=> cy.get("#home-page"),
  mineButton: ()=> cy.get("#order"),
  buildContainer: ()=> cy.get("#build-page"),
  flag: ()=> cy.get("header #flag"),
  homeTitle: ()=> cy.get("#home-page #title"),
  buildTitle: ()=> cy.get("#build-page #title"),
  espera: ()=> cy.wait(2000),
  partImageArray: ()=> cy.get (".part .part-images"),
  partSelectorArray: ()=> cy.get(".part"),
  partImage: ()=> cy.get(".part-image"),
  buttonParts: {
    next: ()=> cy.get('.next-selector'),
    previous: ()=> cy.get('.prev-selector')
  }
}

describe('testing home page', () => {
  beforeEach(()=> {
    cy.visit("/")
  })
  it('accesing home page', () => {
    el.homeContainer().should('exist')
  })

  it('testing mine button', () => {
    el.espera()  
    el.mineButton().click()
    el.buildContainer().should('exist')
    
  })

  it('testing translate button', () => {        
    el.homeTitle().should("contain.text","Build now your Mange Bot!")
    el.espera()
    el.flag().click()
    el.homeTitle().should("contain.text","Construa agora seu Mange Bot!")
    el.espera()
    
  })
})

describe('testing build page', () =>{
 beforeEach(()=> {
    cy.visit("/buildView")
  })
  it('accesing build page', () => {
    el.buildContainer().should('exist')
  })

  it('testing translate button', () => {        
    el.buildTitle().should("contain.text","Customize your Robot!")
    el.espera()
    el.flag().click()
    el.buildTitle().should("contain.text","Personalize seu Robô!")
    el.espera()
  })
  it('checking parts', () =>{
    const images = el.partImageArray();
    images.should('have.length', 5).each($img=>{
      const img = cy.wrap($img);
      img.should('exist');
      img.should('have.attr', 'src')

      const sourceImage = $img.attr('src');
      console.log(sourceImage);
      if(!sourceImage){
        throw new Error('source is empty')
      }
      img.should('not.be.empty')
    })

    it('cheking part changing', ()=>{
      const partSelectors = el.partSelectorArray();



    //   partSelectors.each($part=>{
    //     const part = cy.wrap($part);
    //     const image= () => part.get(".part-images");
    //     const next = part.get(".next-selector");
    //     const previous = part.get(".prev-selector");
    //     let imageId;
    //     let newImageId;
    //     image().each($img=> imageId=$img.attr('image-id'));
    //     next.click();
    //     image().each($img=> newImageId=$img.attr('image-id'));
        
    //   })
    // })

  })
})