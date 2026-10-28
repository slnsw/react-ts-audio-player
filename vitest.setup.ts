// Set up.

import { vi } from 'vitest';

// Mocks for modules that require it.

vi.mock('server-only', () => {
  return {
    // mock server-only module
  };
});

vi.mock('react', async (importOriginal) => {
  const testCache = <T extends (...args: Array<unknown>) => unknown>(func: T) =>
    func;
  return {
    ...(await importOriginal()),
    cache: testCache,
  };
});

vi.mock('react-dom', async (importOriginal) => ({
  ...(await importOriginal()),
  useActionState: () => [
    {
      result: undefined,
      errors: [],
      fieldErrors: [],
      shouldRedirect: false,
    },
    vi.fn(),
  ],
  useFormStatus: () => ({ pending: false }),
}));

const usePathname = vi.fn();
usePathname.mockReturnValue('/');
vi.mock('next/navigation', async (importOriginal) => {
  return {
    ...(await importOriginal()),
    useRouter: () => ({
      push: vi.fn(),
      replace: vi.fn(),
      prefetch: vi.fn(),
    }),
    useSearchParams: () => ({
      get: () => {},
    }),
    usePathname,
  };
});

// Mock browser APIs.

global.scrollTo = vi.fn();

window.HTMLMediaElement.prototype.load = vi.fn(() => {
  console.log('Media element load.');
});
window.HTMLMediaElement.prototype.play = vi.fn(async () => {
  console.log('Media element play.');
});
window.HTMLMediaElement.prototype.pause = vi.fn(() => {
  console.log('Media element pause.');
});
window.HTMLMediaElement.prototype.addTextTrack = vi.fn(() => {
  console.log('Media element add text track.');
  return new TextTrack();
});
