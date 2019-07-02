import { html, fixture, expect } from '@open-wc/testing';

import '../src/web-comp';

describe('<web-comp>', () => {
  it('has a default property header', async () => {
    const el = await fixture('<web-comp></web-comp>');
    expect(el.title).to.equal('open-wc');
  });

  it('allows property header to be overwritten', async () => {
    const el = await fixture(html`
      <web-comp title="different"></web-comp>
    `);
    expect(el.title).to.equal('different');
  });
});
