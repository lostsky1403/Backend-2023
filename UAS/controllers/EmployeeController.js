// import model employee
const Employee = require("../models/Employee");

class EmployeeController {
  async index(req, res) {
    // TODO 4: Tampilkan data employee
    const employees = await Employee.all();

    const data = {
      message: "Menampilkan data employee",
      data: employees,
    };

    res.status(200).json(data);
  }

  async store(req, res) {
    /**
     * validasi sederhana
     * -handle jika salah satu field kosong
     */
    //destructuring req.body
    const { name, gender, phone, address, email, status, hired_on, timestamp } =
      req.body;

    // check jika salah satu field kosong
    if (
      !name ||
      !gender ||
      !phone ||
      !address ||
      !email ||
      !status ||
      !hired_on
    ) {
      const data = {
        message: "Semua field harus diisi",
      };

      return res.status(422).json(data);
    }

    //else
    /**

     * Method create mengembalikan data yang baru diinsert.
     * Mengembalikan response dalam bentuk json.
     */

    const employee = await Employee.create(req.body);
    const data = {
      message: "Menambahkan data employee",
      data: Employee,
    };

    res.status(201).json(data);
  }

  async update(req, res) {
    /**
     * check id employee
     * jika ada, lakukan update
     * jika tidak, kirim data tidak ada
     */
    const { id } = req.params;

    const employee = await Employee.find(id);

    if (employee) {
      // update data
      const employeeUpdated = await Employee.update(id, req.body);
      const data = {
        message: "Mengupdate data employee",
        data: employeeUpdated,
      };

      res.status(200).json(data);
    } else {
      // kirim data tidak ada
      const data = {
        message: "Data tidak ada",
      };

      res.status(404).json(data);
    }
  }

  async getByStatus(req, res) {
    const { status } = req.params;

    const employees = await Employee.getByStatus(status);

    const data = {
      message: "Menampilkan data employee",
      data: employees,
    };

    res.status(200).json(data);
  }
  async destroy(req, res) {
    const { id } = req.params;

    /**
     * cari id
     * jika ada, hapus data
     * jika tidak, kirim data tidak ada
     */

    const employee = await Employee.find(id);

    if (employee) {
      // hapus data
      await Employee.delete(id);
      const data = {
        message: "Menghapus data employee",
      };

      res.status(200).json(data);
    } else {
      // data tidak ada
      const data = {
        message: "Data tidak ada",
      };

      res.status(404).json(data);
    }
  }
  async search(req, res) {
    const { name } = req.params;

    // melakukan search nama dengan function search
    const employee = await Employee.search(name);

    // melakukan validasi jika data ada atau tidak ada
    if (employee) {
        const data = {
            message: "Get Searched Resource",
            data: employee,
        };

        res.status(200).json(data);
    } else {
        const data = {
            message: "Resource not found",
        };

        res.status(404).json(data);
    }
}

  async show(req, res) {
    /**
     * cari id
     * jika ada, kirim datanya
     * jika tidak, kirim data tidak ada
     */
    const { id } = req.params;

    const employee = await Employee.find(id);

    if (employee) {
      const data = {
        message: "Menampilkan detail data employee",
        data: employee,
      };

      res.status(200).json(data);
    } else {
      const data = {
        message: "Data tidak ada",
      };

      res.status(404).json(data);
    }
  }
}

// make an object Employee Controller
const object = new EmployeeController();

// export object
module.exports = object;
