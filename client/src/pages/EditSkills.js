import React, { useState, useEffect } from 'react';

const EditSkills = () => {
    const [skills, setSkills] = useState([]);
    const [newSkill, setNewSkill] = useState('');
    const [newLevel, setNewLevel] = useState(0);
    const [editingSkillId, setEditingSkillId] = useState(null);
    const [editLevels, setEditLevels] = useState({});

    const fetchSkills = () => {
        fetch('http://localhost:5000/skills')
            .then(response => response.json())
            .then(data => setSkills(data))
            .catch(error => console.error('Error fetching skills:', error));
    };

    useEffect(() => {
        fetchSkills();
    }, []);

    const addSkill = () => {
        fetch('http://localhost:5000/add_skill', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ skill_name: newSkill, level: newLevel })
        }).then(() => {
            fetchSkills();
            setNewSkill('');
            setNewLevel(0);
        });
    };

    const startEdit = (skill) => {
        setEditingSkillId(skill ? skill._id : null);
        setEditLevels({ ...editLevels, [skill._id]: skill.level });
    };
    

    const saveEdit = (id) => {
        fetch(`http://localhost:5000/update_skill/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ level: editLevels[id] })
        }).then(() => {
            setEditingSkillId(null);
            fetchSkills();
        });
    };

    const cancelEdit = () => {
        setEditingSkillId(null);
    };

    const deleteSkill = (id) => {
        fetch(`http://localhost:5000/delete_skill/${id}`, {
            method: 'DELETE'
        }).then(() => {
            fetchSkills();
        });
    };

    return (
        <div>
            <h1>Edit Skills</h1>
            <input type="text" value={newSkill} onChange={(e) => setNewSkill(e.target.value)} placeholder="Skill Name" />
            <input type="number" value={newLevel} onChange={(e) => setNewLevel(e.target.value)} placeholder="Skill Level" />
            <button onClick={addSkill}>Add Skill</button>

            <div>
                {editingSkillId !== null ? (
                    <span>
                        <input
                            type="number"
                            value={editLevels[editingSkillId] || ''}
                            onChange={(e) => setEditLevels({ ...editLevels, [editingSkillId]: e.target.value })}
                            placeholder={`Current Level: ${skills.find(skill => skill._id === editingSkillId).level || ''}`}
                        />
                        <button onClick={() => saveEdit(editingSkillId)}>Save</button>
                        <button onClick={cancelEdit}>Cancel</button>
                    </span>
                ) : null}
                <button onClick={() => startEdit(null)}>Edit</button>
            </div>


        {skills.map(skill => (
    <div key={skill._id}>
        <span>{skill.skill_name}: </span>

        {editingSkillId === skill._id ? (
            <span>
                <input
                    type="number"
                    value={editLevels[skill._id] || skill.level}
                    onChange={(e) => setEditLevels({ ...editLevels, [skill._id]: e.target.value })}
                    placeholder={`Current Level: ${skill.level}`}
                />
                <button onClick={() => saveEdit(skill._id)}>Save</button>
                <button onClick={cancelEdit}>Cancel</button>
            </span>
        ) : (
            <span>
                <button onClick={() => startEdit(skill)}>Edit</button>
                <span>Current Level: {skill.level}</span>
            </span>
        )}
    </div>
))}

        </div>
    );
};

export default EditSkills;


