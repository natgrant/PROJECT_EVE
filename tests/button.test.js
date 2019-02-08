import React from 'react'
import { mount } from 'enzyme'

import Button from '../client/components/Button'

test('<Button />', () => {
  const expected = "Enter If You Dare "
  const wrapper = mount(<Button />)
  expect(wrapper.text()).toBe(expected)
})