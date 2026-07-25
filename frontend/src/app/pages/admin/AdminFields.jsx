import { useState, useEffect } from "react";
import {
  Layers,
  Plus,
  Edit2,
  Trash2,
  Calendar,
  X,
  AlertTriangle,
} from "lucide-react";
import {
  getAdminFields,
  createAdminField,
  updateAdminField,
  deleteAdminField,
} from "../../services/adminService";
import "./admin-css/AdminFields.css";

const AdminFields = () => {
  const [fields, setFields] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [modalOpen, setModalOpen] = useState(false);
  const [editingField, setEditingField] = useState(null);
  const [formData, setFormData] = useState({ name: "", description: "" });
  const [formSubmitLoading, setFormSubmitLoading] = useState(false);

  return (
    <div className="admin-fields-container">
      <div className="admin-fields-header">
        <div>
          <h1 className="admin-fields-title">Manage Fields</h1>
          <p className="admin-fields-subtitle">
            Define and edit the academic or engineering research areas of the
            platform.
          </p>
        </div>
        <button onClick={handleOpenAddModal} className="admin-fields-btn-add">
          <Plus className="w-4 h-4" />
          <span>Add New Field</span>
        </button>
      </div>
    </div>
  );
};
