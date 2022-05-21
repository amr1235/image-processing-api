import supertest from 'supertest';
import app from './../../index';

const request = supertest(app);

describe('images route test', () => {
  const fileName = 'palmtunnel';
  const width = 300;
  const height = 300;
  it('test valid parameters', async () => {
    const res = await request.get(
      `/api/images?filename=${fileName}&width=${width}&height=${height}`
    );
    expect(res.statusCode).toBe(200);
  });
  it('test invalid width', async () => {
    const res = await request.get(
      `/api/images?filename=${fileName}&width=0&height=${height}`
    );
    expect(res.statusCode).toBe(400);
  });
  it('test empty width', async () => {
    const res = await request.get(
      `/api/images?filename=${fileName}&height=${height}`
    );
    expect(res.statusCode).toBe(400);
  });
  it('test invalid heigth', async () => {
    const res = await request.get(
      `/api/images?filename=${fileName}&width=${width}&height=0`
    );
    expect(res.statusCode).toBe(400);
  });
  it('test empty heigth', async () => {
    const res = await request.get(
      `/api/images?filename=${fileName}&width=${width}`
    );
    expect(res.statusCode).toBe(400);
  });
  it('test empty file name', async () => {
    const res = await request.get(
      `/api/images?width=${width}&height=${height}`
    );
    expect(res.statusCode).toBe(400);
  });
  it('test valid parameters but not exsisiting image', async () => {
    const res = await request.get(
      `/api/images?filename=amr&width=${width}&height=${height}`
    );
    expect(res.statusCode).toBe(500);
  });
});
