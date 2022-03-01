import chaiHttp from "chai-http";
import chai from "chai";
import { test } from "./app.js";

chai.use(chaiHttp);
chai.should();

describe("/itommey", () => {
  it("it should have a status 200", (done) => {
    const data = { data: [9, 2, 4, 3, 1] };

    chai
      .request(test)
      .post("/itommey")
      .send(data)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
