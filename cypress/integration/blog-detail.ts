context('Blog detail page', () => {
  it('should return a 404 when accessing to a non-existing blog article page', () => {
    cy.visit('http://localhost:3000/blog/non-existing-blog-article');
    cy.get('main').should(
      'contain',
      'LA PAGE QUE VOUS RECHERCHEZ EST INTROUVABLE.'
    );
  });
});

export {};
