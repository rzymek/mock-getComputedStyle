import {beforeAll, afterAll} from "vitest"
import { mockGetComputedStyle, restoreGetComputedStyle } from './mock';

beforeAll(mockGetComputedStyle);
afterAll(restoreGetComputedStyle);