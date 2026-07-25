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

      {/* Grid Layout of Fields */}
      {loading ? (
        <div className="admin-fields-loading">Loading fields...</div>
      ) : fields.length === 0 ? (
        <div className="admin-fields-empty">
          No research fields defined yet. Click "Add New Field" to create one.
        </div>
      ) : (
        <div className="admin-fields-grid">
          {fields.map((field) => {
            const name = field.name || field.field_name;
            return (
              <div key={field.field_id} className="admin-fields-card">
                <div>
                  <div className="admin-fields-card-header">
                    <div className="admin-fields-icon-wrapper">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="admin-fields-card-title">{name}</h3>
                      <span className="admin-fields-card-id">
                        ID: #{field.field_id}
                      </span>
                    </div>
                  </div>
                  <p className="admin-fields-card-desc">{field.description}</p>
                </div>

                <div className="admin-fields-card-footer">
                  <div className="admin-fields-date">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{formatDate(field.created_at)}</span>
                  </div>
                  <div className="admin-fields-actions">
                    <button
                      onClick={() => handleOpenEditModal(field)}
                      className="admin-fields-btn-edit"
                      title="Edit Field"
                    >
                      <Edit2 className="w-4.5 h-4.5" />
                    </button>
                    <button
                      onClick={() => handleDelete(field.field_id, name)}
                      className="admin-fields-btn-delete"
                      title="Delete Field"
                    >
                      <Trash2 className="w-4.5 h-4.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
