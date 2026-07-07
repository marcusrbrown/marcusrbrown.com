import {render, screen} from '@testing-library/react'
import {describe, expect, it, vi} from 'vitest'
import {axe} from 'vitest-axe'
import {About} from '../sections/About'
import {Contact} from '../sections/Contact'
import {Experience} from '../sections/Experience'
import {Skills} from '../sections/Skills'

let mockIsVisible = true

vi.mock('../../hooks/UseScrollReveal', () => ({
  useScrollReveal: () => ({
    ref: {current: null},
    isVisible: mockIsVisible,
  }),
}))

describe('section components smoke tests', () => {
  it('renders About section with expected id and title', () => {
    mockIsVisible = true
    render(<About />)

    expect(document.querySelector('#about')).not.toBeNull()
    expect(screen.getByRole('heading', {level: 2, name: 'About'})).toBeDefined()
  })

  it('keeps About hidden before reveal', () => {
    mockIsVisible = false
    render(<About />)

    const section = document.querySelector('#about')

    expect(section).not.toBeNull()
    expect(section?.className.includes('is-visible')).toBe(false)
  })

  it('renders Experience section with expected id and title', () => {
    mockIsVisible = true
    render(<Experience />)

    expect(document.querySelector('#experience')).not.toBeNull()
    expect(screen.getByRole('heading', {level: 2, name: 'Experience'})).toBeDefined()
  })

  it('keeps Experience hidden before reveal', () => {
    mockIsVisible = false
    render(<Experience />)

    const section = document.querySelector('#experience')

    expect(section).not.toBeNull()
    expect(section?.className.includes('is-visible')).toBe(false)
  })

  it('renders Skills section with expected id and title', () => {
    mockIsVisible = true
    render(<Skills />)

    expect(document.querySelector('#skills')).not.toBeNull()
    expect(screen.getByRole('heading', {level: 2, name: 'Skills'})).toBeDefined()
  })

  it('keeps Skills hidden before reveal', () => {
    mockIsVisible = false
    render(<Skills />)

    const section = document.querySelector('#skills')

    expect(section).not.toBeNull()
    expect(section?.className.includes('is-visible')).toBe(false)
  })

  it('renders Contact section with expected id and title', () => {
    mockIsVisible = true
    render(<Contact />)

    expect(document.querySelector('#contact')).not.toBeNull()
    expect(screen.getByRole('heading', {level: 2, name: 'Contact'})).toBeDefined()
  })

  it('keeps Contact hidden before reveal', () => {
    mockIsVisible = false
    render(<Contact />)

    const section = document.querySelector('#contact')

    expect(section).not.toBeNull()
    expect(section?.className.includes('is-visible')).toBe(false)
  })
})

describe('section accessibility tests', () => {
  it('About section has no accessibility violations', async () => {
    const {container} = render(<About />)
    expect(await axe(container)).toHaveNoViolations()
  })

  it('Experience section has no accessibility violations', async () => {
    const {container} = render(<Experience />)
    expect(await axe(container)).toHaveNoViolations()
  })

  it('Skills section has no accessibility violations', async () => {
    const {container} = render(<Skills />)
    expect(await axe(container)).toHaveNoViolations()
  })

  it('Contact section has no accessibility violations', async () => {
    const {container} = render(<Contact />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
