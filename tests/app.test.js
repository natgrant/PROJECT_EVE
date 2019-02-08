import React from 'react'
import { shallow } from 'enzyme'

import App from '../client/components/App'

test('<App />', () => {
  const expected = "PROJECT EVE<HashRouter />"
  const wrapper = shallow(<App />)
  expect(wrapper.text()).toBe(expected)
})
