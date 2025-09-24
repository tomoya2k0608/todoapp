package com.example.todoapp.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.todoapp.model.Tab;
import java.util.Optional;

@Repository
public interface TabRepository extends JpaRepository<Tab, String> {
    List<Tab> findByCreateUser(String createUser);
    Optional<Tab> findByTabIdAndCreateUser(String tabId, String userId);
}
